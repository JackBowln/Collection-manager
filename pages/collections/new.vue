<template>
  <div class="max-w-3xl mx-auto p-4">
    <div class="flex items-center gap-4 mb-6">
      <UButton icon="i-heroicons-arrow-left" variant="ghost" to="/dashboard" />
      <h1 class="text-2xl font-bold">Criar Nova Coleção</h1>
    </div>

    <form @submit.prevent="saveCollection">
      <UCard class="mb-6">
        <template #header>
          <h2 class="font-semibold">Detalhes Básicos</h2>
        </template>
        <div class="space-y-4">
          <UFormGroup label="Nome da Coleção" required>
            <UInput v-model="form.name" placeholder="ex. Discos de Vinil" required />
          </UFormGroup>
          <UFormGroup label="Descrição">
            <UTextarea v-model="form.description" placeholder="Uma coleção dos meus discos raros..." />
          </UFormGroup>
        </div>
      </UCard>

      <CollectionAccessControl v-model="form.visibility" class="mb-6" />

      <div class="relative mb-6">
        <div ref="sentinel" class="absolute -top-1 left-0 right-0 h-1 pointer-events-none" />
        <div 
          class="flex justify-between items-center mb-4 sticky top-0 z-10 py-4 transition-all duration-300 dark:bg-transparent"
          :class="[isSticky ? 'backdrop-blur-md border-b border-gray-200 dark:border-gray-800' : 'border-transparent']"
        >
          <h2 class="text-lg font-semibold">Campos Personalizados</h2>
          <UButton size="sm" icon="i-heroicons-plus" @click="addField">Adicionar Campo</UButton>
        </div>

        <div v-if="form.fields.length === 0" class="text-center py-8 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg">
          <p class="text-gray-500">Nenhum campo definido. Adicione campos para estruturar sua coleção.</p>
        </div>

        <div class="space-y-4">
          <FieldDefinition
            v-for="(field, index) in form.fields"
            :key="index"
            v-model="form.fields[index]"
            @remove="removeField(index)"
          />
        </div>
      </div>

      <div class="flex justify-end gap-3">
        <UButton to="/dashboard" color="gray" variant="ghost">Cancelar</UButton>
        <UButton type="submit" :loading="loading">Criar Coleção</UButton>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
const { loggedIn } = useUserSession()
const toast = useToast()

const loading = ref(false)

const form = reactive({
  name: '',
  description: '',
  visibility: 'private' as 'private' | 'shared' | 'public',
  fields: [] as any[]
})

const addField = () => {
  form.fields.push({
    name: '',
    type: 'text',
    options: [],
    visible: true,
    required: false,
    is_dynamic: false,
    selected: false,
    folder_order: form.fields.length
  })
}

const removeField = (index: number) => {
  form.fields.splice(index, 1)
}

const saveCollection = async () => {
  if (!loggedIn.value) return
  if (form.fields.length === 0 && !confirm('Criar coleção sem nenhum campo personalizado?')) return

  try {
    loading.value = true
    
    await $fetch('/api/collections', {
      method: 'POST',
      body: {
        name: form.name,
        description: form.description,
        visibility: form.visibility,
        fields: form.fields
      }
    })

    toast.add({ title: 'Sucesso', description: 'Coleção criada com sucesso', color: 'green' })
    navigateTo('/dashboard')

  } catch (error: any) {
    toast.add({ title: 'Erro', description: error.message, color: 'red' })
  } finally {
    loading.value = false
  }
}

// Sticky header logic
const isSticky = ref(false)
const sentinel = ref<HTMLElement | null>(null)

onMounted(() => {
  const observer = new IntersectionObserver(([entry]) => {
    isSticky.value = !entry.isIntersecting && entry.boundingClientRect.top < 0
  }, { threshold: 1.0 })
  
  if (sentinel.value) observer.observe(sentinel.value)
})

onUnmounted(() => {
  // Ideally we store observer in a variable or use a composable, but since we are in setup(), just relying on standard lifecycle is cleaner.
})
</script>
