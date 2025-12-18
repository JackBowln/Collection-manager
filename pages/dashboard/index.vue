<template>
  <div>
    <!-- Hero Section -->
    <div class="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
      <div>
        <h1 class="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-2">
          Bem-vindo, <span class="text-primary-500">{{ user?.user_metadata.full_name?.split(' ')[0] }}</span>
        </h1>
        <p class="text-gray-500 dark:text-gray-400">Gerencie suas coleções ou descubra novidades.</p>
      </div>
      <UButton to="/collections/new" icon="i-heroicons-plus" size="lg" class="shadow-lg shadow-primary-500/20 hover:scale-105 transition-transform">
        Nova Coleção
      </UButton>
    </div>

    <!-- Tabs for My Collections vs Shared -->
    <div class="space-y-8">
      
      <!-- Section: My Collections -->
      <section>
        <h2 class="text-lg font-semibold mb-4 flex items-center gap-2">
          <UIcon name="i-heroicons-user" />
          Minhas Coleções
        </h2>
        
        <!-- Loading -->
        <div v-if="pending" class="flex justify-center py-8">
          <UIcon name="i-heroicons-arrow-path" class="w-8 h-8 animate-spin text-gray-400" />
        </div>
        
        <!-- Empty -->
        <div v-else-if="collections?.length === 0" class="text-center py-8 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-lg">
           <p class="text-gray-500">Você não tem coleções criadas.</p>
        </div>

        <!-- Grid -->
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           <UCard
             v-for="collection in collections"
             :key="collection.id"
             class="group cursor-pointer border-0 ring-1 ring-gray-200 dark:ring-gray-800 shadow-sm hover:shadow-xl hover:ring-primary-500/50 dark:hover:ring-primary-500/50 transition-all duration-300 transform hover:-translate-y-1 bg-white dark:bg-gray-900 overflow-hidden"
             @click="goToCollection(collection.id)"
           >
             <div class="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <UDropdown :items="getActionItems(collection)" @click.stop>
                    <UButton color="gray" variant="soft" icon="i-heroicons-ellipsis-vertical" size="xs" />
                 </UDropdown>
             </div>

             <!-- Card Body -->
             <div class="p-4 flex flex-col h-full">
                <div class="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/50 flex items-center justify-center text-primary-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <UIcon name="i-heroicons-folder" class="w-7 h-7" />
                </div>
                
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-1 group-hover:text-primary-500 transition-colors">
                  {{ collection.name }}
                </h3>
                
                <p class="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 mb-4 flex-1">
                  {{ collection.description || 'Sem descrição definida.' }}
                </p>

                <div class="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                  <span class="text-xs text-gray-400 font-mono">{{ new Date(collection.created_at).toLocaleDateString() }}</span>
                  <UBadge 
                    size="xs" 
                    variant="subtle" 
                    :color="collection.visibility === 'public' ? 'green' : (collection.visibility === 'shared' ? 'purple' : 'gray')"
                  >
                    {{ collection.visibility === 'public' ? 'Público' : (collection.visibility === 'shared' ? 'Compartilahdo' : 'Privado') }}
                  </UBadge>
                </div>
             </div>
             
             <!-- Remove default header/footer slots to custom design -->
           </UCard>
        </div>
      </section>

      <!-- Section: Shared With Me -->
      <section>
        <h2 class="text-lg font-semibold mb-4 flex items-center gap-2 text-purple-600 dark:text-purple-400">
          <UIcon name="i-heroicons-users" />
          Compartilhado Comigo
        </h2>

        <!-- Loading -->
        <div v-if="pendingShares" class="text-sm text-gray-400">Carregando compartilhamentos...</div>

        <!-- Empty -->
        <div v-else-if="sharedCollections?.length === 0" class="text-center py-8 bg-gray-50 dark:bg-gray-800 rounded-lg">
           <p class="text-gray-500 text-sm">Ninguém compartilhou coleções com você ainda.</p>
        </div>

        <!-- Grid -->
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           <UCard
             v-for="item in sharedCollections"
             :key="item.collection.id"
             class="group cursor-pointer border-0 ring-1 ring-purple-100 dark:ring-purple-900/30 shadow-sm hover:shadow-purple-500/20 hover:ring-purple-500/50 transition-all duration-300 transform hover:-translate-y-1 bg-white dark:bg-gray-900"
             @click="goToCollection(item.collection.id)"
           >
             <div class="p-4 flex flex-col h-full">
                <div class="flex justify-between items-start mb-3">
                  <div class="w-10 h-10 rounded-lg bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                    <UIcon name="i-heroicons-folder-open" class="w-6 h-6" />
                  </div>
                  <UIcon name="i-heroicons-eye" class="text-gray-300 group-hover:text-purple-500 transition-colors" />
                </div>

                <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-purple-500 transition-colors">
                   {{ item.collection.name }}
                </h3>
                <p class="text-gray-500 text-sm line-clamp-2 mb-4 flex-1">
                  {{ item.collection.description || 'Sem descrição' }}
                </p>
             
                <div class="flex items-center gap-2 pt-3 border-t border-gray-100 dark:border-gray-800">
                   <UAvatar :src="item.collection.owner?.avatar_url" size="xs" class="ring-2 ring-white dark:ring-gray-900" />
                   <div class="flex flex-col">
                      <span class="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Compartilhado por</span>
                      <span class="text-xs font-medium text-gray-700 dark:text-gray-300">
                        {{ item.collection.owner?.full_name || 'Desconhecido' }}
                      </span>
                   </div>
                </div>
             </div>
           </UCard>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient()
const user = useSupabaseUser()
const toast = useToast()

definePageMeta({
  middleware: 'auth'
})

// Fetch My Collections
const { data: collections, pending, refresh: refreshMy } = await useAsyncData('my-collections', async () => {
  const { data, error } = await supabase
    .from('collections')
    .select('*')
    .eq('user_id', user.value?.id)
    .order('created_at', { ascending: false })
  
  if (error) throw error
  return data || []
})

// Fetch Shared With Me
const { data: sharedCollections, pending: pendingShares, refresh: refreshShared } = await useAsyncData('shared-collections', async () => {
  // Query collection_shares table
  // We need to join with collections -> profiles to get the owner name
  const { data, error } = await supabase
    .from('collection_shares')
    .select(`
      id,
      collection:collections (
         id, name, description, created_at, visibility,
         owner:profiles ( full_name, avatar_url, email )
      )
    `)
    .eq('user_id', user.value?.id) // Shared with ME
  
  if (error) throw error
  return data || []
})

const refresh = () => {
  refreshMy()
  refreshShared()
}

const getActionItems = (collection: any) => [
  [{
    label: 'Editar',
    icon: 'i-heroicons-pencil-square',
    click: () => navigateTo(`/collections/${collection.id}/edit`)
  }],
  [{
    label: 'Excluir',
    icon: 'i-heroicons-trash',
    click: () => confirmDelete(collection.id)
  }]
]

const goToCollection = (id: string) => {
  navigateTo(`/collections/${id}`)
}

const confirmDelete = async (id: string) => {
  if (!confirm('Tem certeza que deseja excluir esta coleção e todos os seus itens?')) return

  const { error } = await supabase
    .from('collections')
    .delete()
    .eq('id', id)
  
  if (error) {
    toast.add({ title: 'Erro', description: error.message, color: 'red' })
  } else {
    toast.add({ title: 'Sucesso', description: 'Coleção excluída', color: 'green' })
    refresh()
  }
}
</script>
