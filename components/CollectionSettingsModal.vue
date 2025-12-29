<template>
  <UModal v-model="isOpen" prevent-close :ui="{ width: 'sm:max-w-2xl' }">
    <UCard :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
            Configurações da Coleção
          </h3>
          <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark" class="-my-1" @click="isOpen = false" />
        </div>
      </template>

      <div class="space-y-6 max-h-[70vh] overflow-y-auto p-1">
        <!-- Basic Info -->
        <div class="space-y-4">
          <UFormGroup label="Nome da Coleção" required>
            <UInput v-model="form.name" placeholder="ex. Minha Coleção" />
          </UFormGroup>
          <UFormGroup label="Descrição">
            <UTextarea v-model="form.description" />
          </UFormGroup>
        </div>

        <UDivider />

        <!-- Visibility -->
        <CollectionAccessControl v-model="form.visibility" :collection-id="collectionId" />

        <UDivider />

        <!-- Fields Management -->
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <h4 class="text-sm font-bold uppercase tracking-wider text-gray-500">Campos Personalizados</h4>
            <UButton size="xs" icon="i-heroicons-plus" @click="addField">Adicionar Campo</UButton>
          </div>

          <div v-if="form.fields.length === 0" class="text-center py-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border-2 border-dashed border-gray-200 dark:border-gray-700">
             <p class="text-sm text-gray-500">Nenhum campo personalizado ainda.</p>
          </div>

          <div class="space-y-3">
            <div v-for="(field, index) in form.fields" :key="field.id || index" class="relative group">
              <FieldDefinition v-model="form.fields[index]" @remove="removeField(index)" />
            </div>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex justify-end gap-3">
          <UButton color="gray" variant="ghost" @click="isOpen = false">Cancelar</UButton>
          <UButton color="primary" :loading="loading" @click="saveChanges">Salvar Alterações</UButton>
        </div>
      </template>
    </UCard>
  </UModal>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean
  collectionId: string
}>()

const emit = defineEmits(['update:modelValue', 'refresh'])

const isOpen = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})

const toast = useToast()
const loading = ref(false)

const form = reactive({
  name: '',
  description: '',
  visibility: 'private' as 'private' | 'shared' | 'public',
  fields: [] as any[]
})

// Load current data when opening
watch(isOpen, async (val) => {
  if (val) {
    loading.value = true
    try {
      const data = await $fetch(`/api/collections/${props.collectionId}`)
      
      form.name = (data as any).name
      form.description = (data as any).description
      form.visibility = (data as any).visibility || 'private'
      form.fields = ((data as any).fields || []).sort((a: any, b: any) => a.folder_order - b.folder_order)
    } catch (e: any) {
      toast.add({ title: 'Erro ao carregar', description: e.message, color: 'red' })
      isOpen.value = false
    } finally {
      loading.value = false
    }
  }
})

const addField = () => {
  form.fields.push({
    name: '',
    type: 'text',
    options: [],
    visible: true,
    required: false,
    folder_order: form.fields.length
  })
}

const removeField = async (index: number) => {
  const field = form.fields[index]
  if (field.id) {
    if (!confirm(`Excluir campo "${field.name}"? Todos os dados deste campo serão perdidos!`)) return
    
    try {
        await $fetch(`/api/collections/${props.collectionId}/fields/${field.id}`, { method: 'DELETE' })
        toast.add({ title: 'Campo removido', color: 'green' })
    } catch (e: any) {
        toast.add({ title: 'Erro', description: e.message, color: 'red' })
        return
    }
  }
  form.fields.splice(index, 1)
}

const saveChanges = async () => {
  loading.value = true
  try {
    await $fetch(`/api/collections/${props.collectionId}`, {
      method: 'PATCH',
      body: {
        name: form.name,
        description: form.description,
        visibility: form.visibility,
        fields: form.fields.map((f, index) => ({ ...f, folder_order: index }))
      }
    })

    toast.add({ title: 'Sucesso', description: 'Configurações atualizadas', color: 'green' })
    emit('refresh')
    isOpen.value = false
  } catch (e: any) {
    toast.add({ title: 'Erro ao salvar', description: e.message, color: 'red' })
  } finally {
    loading.value = false
  }
}
</script>
