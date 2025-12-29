<template>
  <UCard class="mb-4 relative">
    <template #header>
      <div class="flex justify-between items-center">
         <div class="flex items-center gap-2">
           <UCheckbox v-model="field.selected" />
           <UIcon name="i-heroicons-bars-3" class="cursor-move text-gray-400" />
           <span class="font-medium text-sm">Definição do Campo</span>
         </div>
         <UButton color="red" variant="ghost" icon="i-heroicons-trash" size="xs" @click="$emit('remove')" />
      </div>
    </template>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <UFormGroup label="Nome do Campo" required>
        <UInput v-model="field.name" placeholder="ex. Ano de Lançamento" />
      </UFormGroup>

      <UFormGroup label="Tipo do Campo" required>
        <USelect v-model="field.type" :options="typeOptions" />
      </UFormGroup>

      <div 
        v-if="['select', 'multiselect'].includes(field.type)"
        class="md:col-span-2 space-y-3"
      >
        <UCheckbox 
          v-model="field.is_dynamic" 
          label="Preencher opções automaticamente com valores existentes no banco" 
          help="Se marcado, as opções serão carregadas dos itens já cadastrados nesta coleção."
        />

        <UFormGroup 
          v-if="!field.is_dynamic"
          label="Opções (separadas por vírgula)" 
          required
        >
          <UInput 
            v-model="optionsInput" 
            placeholder="Opção 1, Opção 2, Opção 3" 
            @blur="updateOptions"
          />
          <template #help>
            <span class="text-xs text-gray-500">Digite as opções separadas por vírgula.</span>
          </template>
        </UFormGroup>
      </div>
      
      <div class="flex items-center gap-4 mt-2">
         <UCheckbox v-model="field.visible" label="Visível na Tabela" />
         <UCheckbox v-model="field.required" label="Obrigatório" color="red" />
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

const optionsInput = ref(Array.isArray(field.value.options) ? field.value.options.join(', ') : '')

const typeOptions = [
  { label: 'Texto Curto', value: 'text' },
  { label: 'Texto Longo', value: 'textarea' },
  { label: 'Número', value: 'number' },
  { label: 'Data', value: 'date' },
  { label: 'Sim/Não', value: 'boolean' },
  { label: 'Seleção (Dropdown)', value: 'select' },
  { label: 'Múltipla Seleção', value: 'multiselect' }
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
    field.value.is_dynamic = false
    optionsInput.value = ''
  }
})
</script>
