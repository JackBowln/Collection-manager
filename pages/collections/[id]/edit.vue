<template>
  <div class="max-w-3xl mx-auto p-4">
    <div class="flex items-center gap-4 mb-6">
      <UButton icon="i-heroicons-arrow-left" variant="ghost" :to="`/collections/${collectionId}`" />
      <h1 class="text-2xl font-bold">Edit Collection</h1>
    </div>

    <form @submit.prevent="saveCollection">
      <UCard class="mb-6">
        <template #header>
          <h2 class="font-semibold">Basic Details</h2>
        </template>
        <div class="space-y-4">
          <UFormGroup label="Collection Name" required>
            <UInput v-model="form.name" placeholder="e.g. Vintage Vinyls" required />
          </UFormGroup>
          <UFormGroup label="Description">
            <UTextarea v-model="form.description" />
          </UFormGroup>
        </div>
      </UCard>

      <CollectionAccessControl v-model="form.visibility" :collection-id="collectionId" class="mb-6" />

      <div class="mb-6">
        <div class="flex flex-wrap gap-2 justify-between items-center mb-4 sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md py-4 border-b border-gray-200 dark:border-gray-800">
          <div class="flex items-center gap-2">
            <h2 class="text-lg font-semibold">Custom Fields</h2>
            <div v-if="hasSelectedFields" class="flex gap-2 ml-4">
              <UButton size="xs" color="red" variant="soft" @click="deleteSelectedFields">Delete Selected ({{ selectedFieldsCount }})</UButton>
              <UButton size="xs" color="gray" variant="ghost" @click="deselectAllFields">Cancel</UButton>
            </div>
            <UButton v-else size="xs" color="gray" variant="ghost" @click="selectAllFields">Select All</UButton>
          </div>
          <UButton size="sm" icon="i-heroicons-plus" @click="addField">Add Field</UButton>
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
        <UButton :to="`/collections/${collectionId}`" color="gray" variant="ghost">Cancel</UButton>
        <UButton type="submit" :loading="loading">Save Changes</UButton>
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
    if (!confirm(`Are you sure you want to delete field "${field.name}"? All data for this field will be lost!`)) return
    
    // Perform delete immediately or mark for deletion?
    // Safer to delete on save, but that complicates state.
    // Let's delete immediately if user confirms, to simplify state sync
    const { error } = await supabase.from('fields').delete().eq('id', field.id)
    if (error) {
        toast.add({ title: 'Error', description: error.message, color: 'red' })
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
  
  if (!confirm(`Delete ${selected.length} fields? This logic will execute immediately and cannot be undone.`)) return

  const idsToDelete = selected.map(f => f.id).filter(id => !!id)
  
  if (idsToDelete.length > 0) {
     const { error } = await supabase.from('fields').delete().in('id', idsToDelete)
     if (error) {
       toast.add({ title: 'Error', description: error.message, color: 'red' })
       return
     }
  }
  
  // Remove from UI
  form.fields = form.fields.filter(f => !f.selected)
  toast.add({ title: 'Deleted', description: 'Fields removed', color: 'green' })
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

    // 2. Upsert Fields
    // New fields won't have 'id'. Existing fields will.
    const fieldsToUpsert = form.fields.map((f, index) => ({
      id: f.id, // Undefined for new fields
      collection_id: collectionId,
      name: f.name,
      type: f.type,
      options: f.options,
      visible: f.visible,
      required: f.required || false,
      folder_order: index
    }))

    const { error: fieldsError } = await supabase
      .from('fields')
      .upsert(fieldsToUpsert)
    
    if (fieldsError) throw fieldsError

    toast.add({ title: 'Success', description: 'Collection updated', color: 'green' })
    navigateTo(`/collections/${collectionId}`)

  } catch (error: any) {
    toast.add({ title: 'Error', description: error.message, color: 'red' })
  } finally {
    loading.value = false
  }
}
</script>
