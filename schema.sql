-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- PROFILES (Sync with Auth)
create table public.profiles (
  id uuid references auth.users not null primary key,
  email text,
  full_name text,
  avatar_url text,
  created_at timestamptz default now()
);

alter table public.profiles enable row level security;

create policy "Users can view own profile" on public.profiles
for select using (auth.uid() = id);

create policy "Users can update own profile" on public.profiles
for update using (auth.uid() = id);

-- Function to handle new user signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name, avatar_url)
  values (new.id, new.email, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- COLLECTIONS
create table public.collections (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) not null,
  name text not null,
  description text,
  created_at timestamptz default now()
);

alter table public.collections enable row level security;

create policy "Users can CRUD own collections" on public.collections
for all using (auth.uid() = user_id);

-- FIELDS
create type field_type as enum ('text', 'textarea', 'number', 'date', 'boolean', 'select', 'multiselect');

create table public.fields (
  id uuid default uuid_generate_v4() primary key,
  collection_id uuid references public.collections(id) on delete cascade not null,
  name text not null,
  type field_type not null,
  options jsonb, -- For select/multiselect
  folder_order int default 0,
  visible boolean default true
);

alter table public.fields enable row level security;

-- Policies for fields (access via collection ownership)
create policy "Users can CRUD fields of own collections" on public.fields
for all using (
  exists (
    select 1 from public.collections
    where public.collections.id = public.fields.collection_id
    and public.collections.user_id = auth.uid()
  )
);

-- ITEMS
create table public.items (
  id uuid default uuid_generate_v4() primary key,
  collection_id uuid references public.collections(id) on delete cascade not null,
  created_at timestamptz default now()
);

alter table public.items enable row level security;

create policy "Users can CRUD items of own collections" on public.items
for all using (
  exists (
    select 1 from public.collections
    where public.collections.id = public.items.collection_id
    and public.collections.user_id = auth.uid()
  )
);

-- ITEM VALUES
create table public.item_values (
  id uuid default uuid_generate_v4() primary key,
  item_id uuid references public.items(id) on delete cascade not null,
  field_id uuid references public.fields(id) on delete cascade not null,
  value jsonb,
  unique(item_id, field_id)
);

alter table public.item_values enable row level security;

create policy "Users can CRUD values of own items" on public.item_values
for all using (
  exists (
    select 1 from public.items
    join public.collections on public.items.collection_id = public.collections.id
    where public.items.id = public.item_values.item_id
    and public.collections.user_id = auth.uid()
  )
);
