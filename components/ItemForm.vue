<template>
  <form @submit.prevent="save">
    <div class="space-y-4">
      <div v-for="field in fields" :key="field.id">
        <UFormGroup :label="field.name" :name="field.id">
          
          <!-- Text -->
          <UInput 
            v-if="field.type === 'text'" 
            v-model="model[field.id]" 
            type="text" 
          />

          <!-- Textarea -->
          <UTextarea 
            v-if="field.type === 'textarea'" 
            v-model="model[field.id]" 
          />

          <!-- Number -->
          <UInput 
            v-if="field.type === 'number'" 
            v-model.number="model[field.id]" 
            type="number" 
          />

          <!-- Date -->
          <UInput 
            v-if="field.type === 'date'" 
            v-model="model[field.id]" 
            type="date" 
          />

          <!-- Boolean -->
          <UToggle 
            v-if="field.type === 'boolean'" 
            v-model="model[field.id]" 
          />

          <!-- Select -->
          <USelect 
            v-if="field.type === 'select'" 
            v-model="model[field.id]" 
            :options="field.options || []" 
          />

          <!-- MultiSelect -->
          <USelectMenu 
            v-if="field.type === 'multiselect'" 
            v-model="model[field.id]" 
            :options="field.options || []" 
            multiple 
          />

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
}>()

const emit = defineEmits(['save', 'cancel'])

// Initialize model with explicit keys to ensure reactivity
const model = reactive<Record<string, any>>({})

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
  })
}, { immediate: true, deep: true })

const save = () => {
  emit('save', model)
}
</script>
