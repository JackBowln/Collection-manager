<template>
  <div class="container mx-auto p-4 max-w-6xl">
    <!-- Header -->
    <div class="flex justify-between items-center mb-8 border-b pb-4 dark:border-gray-700">
      <div>
        <h1 class="text-3xl font-bold bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
          Explorar Coleções
        </h1>
        <p class="text-gray-500 mt-1">Descubra o que a comunidade está criando.</p>
      </div>
      <UButton to="/dashboard" variant="ghost" icon="i-heroicons-arrow-left">Voltar para Dashboard</UButton>
    </div>

    <!-- Loading -->
    <div v-if="pending" class="flex justify-center py-20">
      <UIcon name="i-heroicons-arrow-path" class="w-10 h-10 animate-spin text-primary-500" />
    </div>

    <!-- Empty State -->
    <div v-else-if="collections?.length === 0" class="text-center py-20 bg-gray-50 dark:bg-gray-800 rounded-xl">
      <UIcon name="i-heroicons-globe-alt" class="w-16 h-16 text-gray-400 mx-auto mb-4" />
      <h3 class="text-xl font-bold text-gray-900 dark:text-white">Nenhuma coleção pública ainda</h3>
      <p class="text-gray-500 mt-2">Seja o primeiro a compartilhar uma coleção com o mundo!</p>
    </div>

    <!-- Blog Grid -->
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <article 
        v-for="collection in collections" 
        :key="collection.id"
        class="group flex flex-col h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      >
        <!-- Card Image Placeholder (Generated based on ID to be consistent) -->
        <div class="h-48 bg-gray-100 dark:bg-gray-800 relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-purple-500/10 group-hover:from-primary-500/20 group-hover:to-purple-500/20 transition-colors"></div>
          <div class="absolute bottom-4 left-4 right-4">
             <UBadge color="primary" variant="subtle" size="sm" class="mb-2">Coleção Pública</UBadge>
             <h2 class="text-xl font-bold text-gray-900 dark:text-white line-clamp-2 leading-tight">
               {{ collection.name }}
             </h2>
          </div>
        </div>

        <!-- Content -->
        <div class="flex-1 p-6 flex flex-col">
          <p class="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-6 flex-1">
            {{ collection.description || 'Sem descrição disponível.' }}
          </p>

          <!-- Author & Footer -->
          <div class="mt-auto border-t border-gray-100 dark:border-gray-800 pt-4 flex items-center justify-between">
            <div class="flex items-center gap-2">
              <UAvatar 
                :src="collection.owner?.avatar_url" 
                :alt="collection.owner?.full_name" 
                size="xs"
              />
              <div class="flex flex-col">
                <span class="text-xs font-semibold text-gray-900 dark:text-white">
                  {{ collection.owner?.full_name || 'Anônimo' }}
                </span>
                <span class="text-[10px] text-gray-500">
                  {{ new Date(collection.created_at).toLocaleDateString() }}
                </span>
              </div>
            </div>
            
            <UButton :to="`/collections/${collection.id}`" variant="ghost" color="gray" icon="i-heroicons-arrow-right" class="-mr-2" />
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient()

definePageMeta({
  layout: 'default'
})

// Fetch Public Collections with Owner Profile
const { data: collections, pending } = await useAsyncData('public-collections', async () => {
  const { data, error } = await supabase
    .from('collections')
    .select(`
      id, 
      name, 
      description, 
      created_at, 
      visibility,
      owner:profiles ( full_name, avatar_url )
    `)
    .eq('visibility', 'public')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data || []
})
</script>
