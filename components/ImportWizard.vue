<template>
  <div class="space-y-4">
    <!-- Step 1: Upload -->
    <div v-if="step === 1">
      <div 
        class="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition"
        @click="triggerFileInput"
      >
        <UIcon name="i-heroicons-document-arrow-up" class="w-12 h-12 text-gray-400 mx-auto mb-2" />
        <p class="text-gray-600 dark:text-gray-300">Clique para enviar arquivo .xlsx</p>
        <input 
          ref="fileInput" 
          type="file" 
          accept=".xlsx, .xls, .csv" 
          class="hidden" 
          @change="handleFileChange"
        />
      </div>
    </div>

    <!-- Step 2: Map Columns -->
    <div v-if="step === 2">
      <h3 class="font-bold mb-4">Mapear Colunas</h3>
      <div class="space-y-3 max-h-96 overflow-y-auto">
        <div v-for="field in collectionFields" :key="field.id" class="grid grid-cols-2 gap-4 items-center">
          <div class="text-sm font-medium">{{ field.name }} <span v-if="field.required" class="text-red-500">*</span></div>
          <USelect 
            v-model="mapping[field.id]" 
            :options="fileHeaders" 
            placeholder="Selecione Coluna Excel"
          />
        </div>
      </div>
      
      <div class="mt-4">
        <h4 class="font-bold text-sm mb-2">Pré-visualização (Primeira Linha)</h4>
        <div class="bg-gray-100 dark:bg-gray-800 p-2 rounded text-xs overflow-x-auto">
          <pre>{{ previewRow }}</pre>
        </div>
      </div>
    </div>

    <!-- Step 3: Processing -->
    <div v-if="step === 3" class="text-center py-8">
      <UIcon name="i-heroicons-arrow-path" class="w-12 h-12 animate-spin text-primary-500 mx-auto mb-4" />
      <p>Processando {{ fullData.length }} itens...</p>
    </div>

    <!-- Actions -->
    <div class="flex justify-end gap-3 mt-6">
      <UButton v-if="step > 1 && step < 3" color="gray" variant="ghost" @click="step = 1">Voltar</UButton>
      <UButton v-if="step === 2" @click="processImport">Importar Linhas</UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { read, utils } from 'xlsx'

const props = defineProps<{
  collectionFields: any[]
  collectionId: string
}>()

const emit = defineEmits(['close', 'refresh'])

const step = ref(1)
const fileInput = ref<HTMLInputElement | null>(null)
const fileHeaders = ref<string[]>([])
const fullData = ref<any[]>([])
const mapping = ref<Record<string, string>>({}) // FieldID -> ExcelHeader

const triggerFileInput = () => {
  fileInput.value?.click()
}

const handleFileChange = async (e: Event) => {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (!file) return

  const data = await file.arrayBuffer()
  const workbook = read(data)
  const sheet = workbook.Sheets[workbook.SheetNames[0]]
  const json = utils.sheet_to_json(sheet)

  if (json.length === 0) {
    alert('Empty file')
    return
  }

  fullData.value = json
  fileHeaders.value = Object.keys(json[0] as object)
  
  // Auto-map if names match
  props.collectionFields.forEach(f => {
    const match = fileHeaders.value.find(h => h.toLowerCase() === f.name.toLowerCase())
    if (match) mapping.value[f.id] = match
  })

  step.value = 2
}

const previewRow = computed(() => {
  if (fullData.value.length === 0) return {}
  return fullData.value[0]
})

const processImport = async () => {
  step.value = 3
  const toast = useToast()

  try {
    // Identify required fields
    const requiredFields = props.collectionFields.filter(f => f.required).map(f => f.id)
    let skippedCount = 0
    const validRowsForImport: any[] = []

    fullData.value.forEach((row) => {
      let isValid = true
      
      // Check each required field
      for (const fieldId of requiredFields) {
        const header = mapping.value[fieldId]
        const value = row[header]
        
        if (value === undefined || value === null || value === '') {
          isValid = false
          break
        }
      }

      if (isValid) {
        // Map excel row to our internal values format
        const values: Record<string, any> = {}
        Object.entries(mapping.value).forEach(([fieldId, excelHeader]) => {
          const value = row[excelHeader]
          if (value !== undefined && value !== null && value !== '') {
            values[fieldId] = value
          }
        })
        validRowsForImport.push({ values })
      } else {
        skippedCount++
      }
    })

    // Call our new bulk import API
    await $fetch(`/api/collections/${props.collectionId}/import`, {
      method: 'POST',
      body: {
        items: validRowsForImport
      }
    })

    toast.add({ 
      title: 'Sucesso', 
      description: `Importados ${validRowsForImport.length} itens. Pulados ${skippedCount} itens por falta de campos obrigatórios.`, 
      color: 'green',
      timeout: 5000 
    })
    emit('refresh')
    emit('close')

  } catch (error: any) {
    console.error(error)
    toast.add({ title: 'Erro', description: error.message, color: 'red' })
    step.value = 2 // Go back
  }
}
</script>
