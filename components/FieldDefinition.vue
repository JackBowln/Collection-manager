<template>
  <UCard class="mb-4 relative">
    <template #header>
      <div class="flex justify-between items-center">
         <div class="flex items-center gap-2">
           <UCheckbox v-model="field.selected" />
           <UIcon name="i-heroicons-bars-3" class="cursor-move text-gray-400" />
           <span class="font-medium text-sm">Field Definition</span>
         </div>
         <UButton color="red" variant="ghost" icon="i-heroicons-trash" size="xs" @click="$emit('remove')" />
      </div>
    </template>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <UFormGroup label="Field Name" required>
        <UInput v-model="field.name" placeholder="e.g. Release Year" />
      </UFormGroup>

      <UFormGroup label="Field Type" required>
        <USelect v-model="field.type" :options="typeOptions" />
      </UFormGroup>

      <UFormGroup 
        v-if="['select', 'multiselect'].includes(field.type)" 
        label="Options (comma separated)" 
        class="md:col-span-2"
        required
      >
        <UInput 
          v-model="optionsInput" 
          placeholder="Option 1, Option 2, Option 3" 
          @blur="updateOptions"
        />
        <template #help>
          <span class="text-xs text-gray-500">Enter options separated by commas.</span>
        </template>
      </UFormGroup>
      
      <div class="flex items-center gap-4 mt-2">
         <UCheckbox v-model="field.visible" label="Visible in Table" />
         <UCheckbox v-model="field.required" label="Required" color="red" />
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: any
}>()

const emit = defineEmits(['update:modelValue', 'remove'])

const field = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})

const optionsInput = ref(field.value.options ? field.value.options.join(', ') : '')

const typeOptions = [
  { label: 'Short Text', value: 'text' },
  { label: 'Long Text', value: 'textarea' },
  { label: 'Number', value: 'number' },
  { label: 'Date', value: 'date' },
  { label: 'Yes/No', value: 'boolean' },
  { label: 'Select (Dropdown)', value: 'select' },
  { label: 'Multi-Select', value: 'multiselect' }
]

const updateOptions = () => {
  if (optionsInput.value.trim()) {
    field.value.options = optionsInput.value.split(',').map(s => s.trim()).filter(Boolean)
  } else {
    field.value.options = []
  }
}

watch(() => field.value.type, (newType) => {
  if (!['select', 'multiselect'].includes(newType)) {
    field.value.options = null
    optionsInput.value = ''
  }
})
</script>
