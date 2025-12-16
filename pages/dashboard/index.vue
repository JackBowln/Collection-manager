<template>
  <div class="p-4">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">My Collections</h1>
      <UButton to="/collections/new" icon="i-heroicons-plus">New Collection</UButton>
    </div>

    <!-- Loading State -->
    <div v-if="pending" class="flex justify-center py-8">
      <UIcon name="i-heroicons-arrow-path" class="w-8 h-8 animate-spin text-gray-400" />
    </div>

    <!-- Empty State -->
    <div v-else-if="collections?.length === 0" class="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg">
      <UIcon name="i-heroicons-folder-open" class="w-12 h-12 text-gray-400 mx-auto mb-2" />
      <h3 class="text-lg font-medium text-gray-900 dark:text-gray-100">No collections yet</h3>
      <p class="text-gray-500 mb-4">Start by creating your first collection.</p>
      <UButton to="/collections/new">Create Collection</UButton>
    </div>

    <!-- Collections Grid -->
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <UCard
        v-for="collection in collections"
        :key="collection.id"
        class="hover:shadow-lg transition-shadow cursor-pointer"
        >
        <!-- @click="goToCollection(collection.id)" -->
        <template #header>
          <div class="flex justify-between items-start">
            <UButton :to="`/collections/${collection.id}`" variant="link" class="p-0 text-lg font-semibold truncate text-gray-900 dark:text-white" :padded="false">
              {{ collection.name }}
            </UButton>
            <UDropdown :items="getActionItems(collection)" @click.stop>
               <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-vertical" />
            </UDropdown>
          </div>
        </template>
        <p class="text-gray-500 text-sm line-clamp-2">{{ collection.description || 'No description' }}</p>
        <template #footer>
          <div class="text-xs text-gray-400">
            Created {{ new Date(collection.created_at).toLocaleDateString() }}
          </div>
        </template>
      </UCard>
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

// Fetch Collections
const { data: collections, pending, refresh } = await useAsyncData('collections', async () => {
  const { data, error } = await supabase
    .from('collections')
    .select('*')
    .eq('user_id', user.value?.id)
    .order('created_at', { ascending: false })
  
  if (error) throw error
  return data || []
})

const getActionItems = (collection: any) => [
  [{
    label: 'Edit',
    icon: 'i-heroicons-pencil-square',
    click: () => navigateTo(`/collections/${collection.id}/edit`)
  }],
  [{
    label: 'Delete',
    icon: 'i-heroicons-trash',
    click: () => confirmDelete(collection.id)
  }]
]

const goToCollection = (id: string) => {
  navigateTo(`/collections/${id}`)
}

const confirmDelete = async (id: string) => {
  if (!confirm('Are you sure you want to delete this collection and all its items?')) return

  const { error } = await supabase
    .from('collections')
    .delete()
    .eq('id', id)
  
  if (error) {
    toast.add({ title: 'Error', description: error.message, color: 'red' })
  } else {
    toast.add({ title: 'Success', description: 'Collection deleted', color: 'green' })
    refresh()
  }
}
</script>
