-- Database schema for SQLite (Cloudflare D1)

-- PROFILES
CREATE TABLE profiles (
    id TEXT PRIMARY KEY,
    email TEXT,
    full_name TEXT,
    avatar_url TEXT,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

-- COLLECTIONS
CREATE TABLE collections (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    visibility TEXT DEFAULT 'private', -- 'private', 'shared', 'public'
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES profiles(id)
);

-- FIELDS
CREATE TABLE fields (
    id TEXT PRIMARY KEY,
    collection_id TEXT NOT NULL,
    name TEXT NOT NULL,
    type TEXT NOT NULL, -- 'text', 'textarea', 'number', 'date', 'boolean', 'select', 'multiselect'
    options TEXT, -- JSON string
    folder_order INTEGER DEFAULT 0,
    visible INTEGER DEFAULT 1, -- Boolean (0 or 1)
    required INTEGER DEFAULT 0, -- Boolean (0 or 1)
    FOREIGN KEY (collection_id) REFERENCES collections(id) ON DELETE CASCADE
);

-- ITEMS
CREATE TABLE items (
    id TEXT PRIMARY KEY,
    collection_id TEXT NOT NULL,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (collection_id) REFERENCES collections(id) ON DELETE CASCADE
);

-- ITEM_VALUES
CREATE TABLE item_values (
    id TEXT PRIMARY KEY,
    item_id TEXT NOT NULL,
    field_id TEXT NOT NULL,
    value TEXT, -- JSON string or raw value
    FOREIGN KEY (item_id) REFERENCES items(id) ON DELETE CASCADE,
    FOREIGN KEY (field_id) REFERENCES fields(id) ON DELETE CASCADE,
    UNIQUE(item_id, field_id)
);

-- COLLECTION_SHARES
CREATE TABLE collection_shares (
    id TEXT PRIMARY KEY,
    collection_id TEXT NOT NULL,
    user_id TEXT, -- Can be null if shared by email to non-existing user
    email TEXT,
    permission TEXT DEFAULT 'view', -- 'view', 'edit'
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (collection_id) REFERENCES collections(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES profiles(id)
);

-- COMMENTS
CREATE TABLE comments (
    id TEXT PRIMARY KEY,
    collection_id TEXT NOT NULL,
    user_id TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (collection_id) REFERENCES collections(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES profiles(id)
);
