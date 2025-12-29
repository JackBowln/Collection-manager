<template>
  <form @submit.prevent="save">
    <div class="space-y-4">
      <div v-for="field in fields" :key="field.id">
        <UFormGroup :label="field.name" :name="field.id">

          <!-- Text -->
          <UInput v-if="field.type === 'text'" v-model="model[field.id]" type="text" />

          <!-- Textarea -->
          <UTextarea v-if="field.type === 'textarea'" v-model="model[field.id]" />

          <!-- Number -->
          <UInput v-if="field.type === 'number'" v-model.number="model[field.id]" type="number" />

          <!-- Date -->
          <UInput v-if="field.type === 'date'" v-model="model[field.id]" type="date" />

          <!-- Boolean -->
          <UToggle v-if="field.type === 'boolean'" v-model="model[field.id]" />

          <!-- Select -->
          <USelect v-if="field.type === 'select'" v-model="model[field.id]" :options="getOptions(field)" creatable />

          <!-- MultiSelect -->
          <USelectMenu v-if="field.type === 'multiselect'" v-model="model[field.id]" :options="getOptions(field)"
            multiple creatable />

        </UFormGroup>
      </div>
    </div>

    <div class="mt-6 flex justify-end gap-3">
      <UButton color="gray" variant="ghost" @click="$emit('cancel')">Cancelar</UButton>
      <UButton type="submit" :loading="loading">Salvar Item</UButton>
    </div>
  </form>
</template>

<script setup lang="ts">
const props = defineProps<{
  fields: any[]
  initialData?: any // Record<field_id, value>
  loading?: boolean
  collectionId: string // Needed for fetching dynamic values
}>()

const emit = defineEmits(['save', 'cancel'])

// Initialize model with explicit keys to ensure reactivity
const model = reactive<Record<string, any>>({})
const dynamicOptions = reactive<Record<string, string[]>>({})

const loadDynamicOptions = async (fieldId: string) => {
  if (dynamicOptions[fieldId]) return // Already loaded
  try {
    const data = await $fetch<string[]>(`/api/collections/${props.collectionId}/fields/${fieldId}/values`)
    dynamicOptions[fieldId] = data
  } catch (e) {
    console.error('Failed to load dynamic options', e)
    dynamicOptions[fieldId] = []
  }
}

const getOptions = (field: any) => {
  if (field.is_dynamic) {
    const opts = dynamicOptions[field.id]
    return Array.isArray(opts) ? opts : []
  }
  return Array.isArray(field.options) ? field.options : []
}

// Populate model from initialData or defaults
watch(() => props.fields, (newFields) => {
  newFields.forEach(f => {
    if (props.initialData && props.initialData[f.id] !== undefined) {
      model[f.id] = props.initialData[f.id]
    } else {
      // Defaults
      if (f.type === 'boolean') model[f.id] = false
      else if (f.type === 'multiselect') model[f.id] = []
      else model[f.id] = null
    }

    // Fetch dynamic options if needed
    if (f.is_dynamic && ['select', 'multiselect'].includes(f.type)) {
      loadDynamicOptions(f.id)
    }
  })
}, { immediate: true, deep: true })

const save = () => {
  emit('save', model)
}
</script>
