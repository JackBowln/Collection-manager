<template>
  <div v-if="fields.length > 0 && items.length > 0" class="mb-8 space-y-6">
    <!-- Grid Principal de Widgets -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <!-- Total Items & Recent Growth -->
      <UCard class="bg-gradient-to-br from-primary-600 to-indigo-700 text-white shadow-lg overflow-hidden relative">
        <div class="absolute -right-4 -bottom-4 opacity-20">
          <UIcon name="i-heroicons-rectangle-stack" class="w-24 h-24" />
        </div>
        <div class="relative z-10">
          <p class="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">Total de Itens</p>
          <div class="flex items-end gap-3">
            <p class="text-4xl font-black">{{ items.length }}</p>
            <div v-if="itemsLast7Days > 0" class="flex items-center text-xs bg-white/20 px-2 py-0.5 rounded-full mb-1">
              <UIcon name="i-heroicons-arrow-trending-up" class="w-3 h-3 mr-1" />
              +{{ itemsLast7Days }} esta semana
            </div>
          </div>
        </div>
      </UCard>

      <!-- Numeric Field Summaries -->
      <UCard v-for="field in numericFields" :key="field.id"
        class="border-0 ring-1 ring-gray-200 dark:ring-gray-800 shadow-sm relative overflow-hidden group">
        <div class="absolute right-2 top-2 opacity-10 group-hover:opacity-20 transition-opacity">
           <UIcon name="i-heroicons-calculator" class="w-12 h-12" />
        </div>
        <div class="space-y-3">
          <div>
            <p class="text-[10px] text-gray-500 dark:text-gray-400 uppercase font-bold tracking-wider mb-1">{{ field.name }} (Média)</p>
            <p class="text-2xl font-black font-mono text-gray-900 dark:text-white leading-none">
              {{ formatValue(getAvg(field.id)) }}
            </p>
          </div>
          
          <div class="grid grid-cols-3 gap-2 border-t border-gray-100 dark:border-gray-800 pt-2">
            <div>
              <p class="text-[9px] text-gray-400 uppercase">Soma</p>
              <p class="text-xs font-bold">{{ formatValue(getSum(field.id)) }}</p>
            </div>
            <div>
              <p class="text-[9px] text-gray-400 uppercase">Mín</p>
              <p class="text-xs font-bold text-blue-500">{{ formatValue(getMin(field.id)) }}</p>
            </div>
            <div>
              <p class="text-[9px] text-gray-400 uppercase">Máx</p>
              <p class="text-xs font-bold text-orange-500">{{ formatValue(getMax(field.id)) }}</p>
            </div>
          </div>
        </div>
      </UCard>
    </div>

    <!-- Seção de Gráficos de Distribuição & Qualidade -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <!-- Distribuições (Select/Boolean) -->
      <UCard v-for="field in distributionFields" :key="field.id"
        class="border-0 ring-1 ring-gray-200 dark:ring-gray-800 shadow-sm">
        <template #header>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <div class="p-1.5 bg-primary-100 dark:bg-primary-900/40 rounded text-primary-600 dark:text-primary-400">
                <UIcon name="i-heroicons-chart-pie" class="w-4 h-4" />
              </div>
              <h3 class="font-bold text-sm">{{ field.name }}</h3>
            </div>
          </div>
        </template>

        <div class="space-y-4">
          <div v-for="(count, option) in getDistribution(field.id)" :key="option" class="space-y-1.5">
            <div class="flex justify-between items-center text-xs">
              <span class="font-semibold text-gray-700 dark:text-gray-300 truncate max-w-[150px]">{{ option }}</span>
              <div class="flex items-center gap-2">
                <span class="font-mono">{{ count }}</span>
                <span class="text-gray-400 bg-gray-100 dark:bg-gray-800 px-1.5 rounded text-[10px]">{{ getPercentage(count, items.length) }}%</span>
              </div>
            </div>
            <UProgress :value="getPercentage(count, items.length)" size="md" color="primary" class="h-2 rounded-full shadow-inner" />
          </div>
        </div>
      </UCard>

      <!-- Qualidade de Dados (Preenchimento) -->
      <UCard class="border-0 ring-1 ring-gray-200 dark:ring-gray-800 shadow-sm lg:col-span-1 md:col-span-2">
        <template #header>
          <div class="flex items-center gap-2">
            <div class="p-1.5 bg-amber-100 dark:bg-amber-900/40 rounded text-amber-600 dark:text-amber-400">
              <UIcon name="i-heroicons-check-circle" class="w-4 h-4" />
            </div>
            <h3 class="font-bold text-sm">Completude dos Dados</h3>
          </div>
        </template>

        <div class="space-y-4">
          <div v-for="field in fields.slice(0, 5)" :key="field.id" class="space-y-1.5">
            <div class="flex justify-between items-center text-xs">
              <span class="font-semibold text-gray-600 dark:text-gray-400">{{ field.name }}</span>
              <span class="font-mono">{{ getFillRate(field.id) }}%</span>
            </div>
            <UProgress :value="getFillRate(field.id)" size="sm" :color="getFillColor(getFillRate(field.id))" />
          </div>
          <p v-if="fields.length > 5" class="text-[10px] text-gray-400 text-center">+ {{ fields.length - 5 }} outros campos</p>
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  fields: any[]
  items: any[] // Pivot rows { id, created_at, field_id: value }
}>()

const numericFields = computed(() => props.fields.filter(f => f.type === 'number'))
const distributionFields = computed(() => props.fields.filter(f => ['select', 'boolean'].includes(f.type)))

const itemsLast7Days = computed(() => {
  const sevenDaysAgo = new Date()
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
  return props.items.filter(item => new Date(item.created_at) >= sevenDaysAgo).length
})

const getFillRate = (fieldId: string) => {
  if (props.items.length === 0) return 0
  const filled = props.items.filter(row => row[fieldId] !== null && row[fieldId] !== undefined && row[fieldId] !== '').length
  return Math.round((filled / props.items.length) * 100)
}

const getFillColor = (rate: number) => {
  if (rate > 80) return 'green'
  if (rate > 50) return 'orange'
  return 'red'
}

const getSum = (fieldId: string) => {
  return props.items.reduce((acc, row) => {
    const val = Number(row[fieldId]) || 0
    return acc + val
  }, 0)
}

const getAvg = (fieldId: string) => {
  if (props.items.length === 0) return 0
  return getSum(fieldId) / props.items.length
}

const getMax = (fieldId: string) => {
  if (props.items.length === 0) return 0
  const vals = props.items.map(row => Number(row[fieldId]) || 0)
  return Math.max(...vals)
}

const getMin = (fieldId: string) => {
  if (props.items.length === 0) return 0
  const vals = props.items.map(row => Number(row[fieldId]) || 0)
  return Math.min(...vals)
}

const getDistribution = (fieldId: string) => {
  const counts: Record<string, number> = {}

  // If boolean, use Sim/Não
  const field = props.fields.find(f => f.id === fieldId)

  props.items.forEach(row => {
    let val = row[fieldId]
    if (field?.type === 'boolean') {
      val = val ? 'Sim' : 'Não'
    } else if (val === null || val === undefined || val === '') {
      val = 'N/A'
    }
    counts[val] = (counts[val] || 0) + 1
  })

  // Sort by count descending
  return Object.fromEntries(
    Object.entries(counts).sort(([,a], [,b]) => b - a)
  )
}

const getPercentage = (count: number, total: number) => {
  if (total === 0) return 0
  return Math.round((count / total) * 100)
}

const formatValue = (val: number) => {
  if (Number.isInteger(val)) return val.toLocaleString()
  return val.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 2 })
}
</script>
