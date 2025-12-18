<template>
  <div class="max-w-3xl mx-auto p-4">
    <div class="flex items-center gap-4 mb-6">
      <UButton icon="i-heroicons-arrow-left" variant="ghost" :to="`/collections/${collectionId}`" />
      <h1 class="text-2xl font-bold">Editar Coleção</h1>
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
            <UTextarea v-model="form.description" />
          </UFormGroup>
        </div>
      </UCard>

      <CollectionAccessControl v-model="form.visibility" :collection-id="collectionId" class="mb-6" />

      <div class="mb-6">
        <div class="flex flex-wrap gap-2 justify-between items-center mb-4 sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md py-4 border-b border-gray-200 dark:border-gray-800">
          <div class="flex items-center gap-2">
            <h2 class="text-lg font-semibold">Campos Personalizados</h2>
            <div v-if="hasSelectedFields" class="flex gap-2 ml-4">
              <UButton size="xs" color="red" variant="soft" @click="deleteSelectedFields">Excluir Selecionados ({{ selectedFieldsCount }})</UButton>
              <UButton size="xs" color="gray" variant="ghost" @click="deselectAllFields">Cancelar</UButton>
            </div>
            <UButton v-else size="xs" color="gray" variant="ghost" @click="selectAllFields">Selecionar Todos</UButton>
          </div>
          <UButton size="sm" icon="i-heroicons-plus" @click="addField">Adicionar Campo</UButton>
        </div>

        <div class="space-y-4">
          <FieldDefinition
            v-for="(field, index) in form.fields"
            :key="field.tempId || field.id || index"
            v-model="form.fields[index]"
            @remove="removeField(index)"
          />
        </div>
      </div>

      <div class="flex justify-end gap-3 z-20 relative">
        <UButton :to="`/collections/${collectionId}`" color="gray" variant="ghost">Cancelar</UButton>
        <UButton type="submit" :loading="loading">Salvar Alterações</UButton>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const collectionId = route.params.id as string
const supabase = useSupabaseClient()
const toast = useToast()
const loading = ref(false)

const form = reactive({
  name: '',
  description: '',
  visibility: 'private' as 'private' | 'shared' | 'public',
  fields: [] as any[]
})

// Load Data
onMounted(async () => {
  const { data, error } = await supabase
    .from('collections')
    .select(`*, fields (*)`)
    .eq('id', collectionId)
    .single()
  
  if (error) {
    toast.add({ title: 'Error', description: 'Could not load collection', color: 'red' })
    navigateTo('/dashboard')
    return
  }

  form.name = data.name
  form.description = data.description
  form.visibility = data.visibility || 'private'
  form.fields = (data.fields || []).sort((a: any, b: any) => a.folder_order - b.folder_order).map((f: any) => ({ ...f, selected: false }))
})

const addField = () => {
  form.fields.push({
    tempId: Date.now(), // Unique ID for v-for key
    name: '',
    type: 'text',
    options: [],
    visible: true,
    required: false,
    selected: false,
    folder_order: form.fields.length
  })
}

const removeField = async (index: number) => {
  const field = form.fields[index]
  if (field.id) {
    if (!confirm(`Tem certeza que deseja excluir o campo "${field.name}"? Todos os dados deste campo serão perdidos!`)) return
    
    // Perform delete immediately or mark for deletion?
    // Safer to delete on save, but that complicates state.
    // Let's delete immediately if user confirms, to simplify state sync
    const { error } = await supabase.from('fields').delete().eq('id', field.id)
    if (error) {
        toast.add({ title: 'Erro', description: error.message, color: 'red' })
        return
    }
  }
  form.fields.splice(index, 1)
}

// Bulk Actions Logic

const hasSelectedFields = computed(() => form.fields.some(f => f.selected))
const selectedFieldsCount = computed(() => form.fields.filter(f => f.selected).length)

const selectAllFields = () => {
  form.fields.forEach(f => f.selected = true)
}

const deselectAllFields = () => {
  form.fields.forEach(f => f.selected = false)
}

const deleteSelectedFields = async () => {
  const selected = form.fields.filter(f => f.selected)
  if (selected.length === 0) return
  
  if (!confirm(`Excluir ${selected.length} campos? Isso executará a ação imediatamente e não poderá ser desfeito.`)) return

  const idsToDelete = selected.map(f => f.id).filter(id => !!id)
  
  if (idsToDelete.length > 0) {
     const { error } = await supabase.from('fields').delete().in('id', idsToDelete)
     if (error) {
       toast.add({ title: 'Erro', description: error.message, color: 'red' })
       return
     }
  }
  
  // Remove from UI
  form.fields = form.fields.filter(f => !f.selected)
  toast.add({ title: 'Excluído', description: 'Campos removidos', color: 'green' })
}

const saveCollection = async () => {
// ... existing save implementation ...
  try {
    loading.value = true
    
    // 1. Update Collection
    const { error: colError } = await supabase
      .from('collections')
      .update({ 
        name: form.name, 
        description: form.description,
        visibility: form.visibility 
      })
      .eq('id', collectionId)
    
    if (colError) throw colError

    // 2. Process Fields
    // We need to split updates and inserts to avoid sending "id: null" which violates constraints
    
    // First, map all fields to the correct payload shape including correct folder_order
    const allFieldsPayload = form.fields.map((f, index) => ({
      ...f,
      collection_id: collectionId,
      folder_order: index,
      // Ensure we only send what's needed
      name: f.name,
      type: f.type,
      options: f.options,
      visible: f.visible,
      required: f.required || false
    }))

    const fieldsToUpdate = allFieldsPayload.filter((f: any) => f.id).map((f: any) => ({
      id: f.id,
      collection_id: f.collection_id,
      name: f.name,
      type: f.type,
      options: f.options,
      visible: f.visible,
      required: f.required,
      folder_order: f.folder_order
    }))

    const fieldsToInsert = allFieldsPayload.filter((f: any) => !f.id).map((f: any) => ({
      collection_id: f.collection_id,
      name: f.name,
      type: f.type,
      options: f.options,
      visible: f.visible,
      required: f.required,
      folder_order: f.folder_order
    }))

    // Execute Update (Upsert) checking for errors
    if (fieldsToUpdate.length > 0) {
      const { error: updateError } = await supabase
        .from('fields')
        .upsert(fieldsToUpdate)
      if (updateError) throw updateError
    }

    // Execute Insert checking for errors
    if (fieldsToInsert.length > 0) {
      const { error: insertError } = await supabase
        .from('fields')
        .insert(fieldsToInsert)
      if (insertError) throw insertError
    }

    toast.add({ title: 'Sucesso', description: 'Coleção atualizada', color: 'green' })
    navigateTo(`/collections/${collectionId}`)

  } catch (error: any) {
    toast.add({ title: 'Erro', description: error.message, color: 'red' })
  } finally {
    loading.value = false
  }
}
</script>
