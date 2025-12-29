<template>
  <div v-if="fields.length > 0 && items.length > 0" class="mb-8 space-y-8 animate-fade-in">

    <!-- 1. TIME SERIES CHART -->
    <UCard class="bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-xl overflow-hidden border-0">
      <div class="flex flex-col md:flex-row gap-8">
        <!-- Summary Stats -->
        <div class="md:w-1/3 space-y-6 z-10">
          <div>
            <p class="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Total na Coleção</p>
            <p
              class="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-indigo-400">
              {{ items.length }} <span class="text-lg text-gray-500 font-normal">itens</span>
            </p>
          </div>

          <div class="space-y-2">
            <div class="flex items-center gap-2 text-sm text-gray-300">
              <UIcon name="i-heroicons-calendar" class="w-4 h-4 text-primary-400" />
              <span>Criado em: <span class="font-bold text-white">{{ formatDate(oldestItemDate) }}</span></span>
            </div>
            <div class="flex items-center gap-2 text-sm text-gray-300">
              <UIcon name="i-heroicons-clock" class="w-4 h-4 text-primary-400" />
              <span>Última adição: <span class="font-bold text-white">{{ formatDate(newestItemDate) }}</span></span>
            </div>
          </div>

          <div v-if="growthRate > 0"
            class="inline-flex items-center gap-1.5 px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-bold">
            <UIcon name="i-heroicons-arrow-trending-up" class="w-3 h-3" />
            +{{ growthRate }}% este mês
          </div>
        </div>

        <!-- Chart -->
        <div class="md:w-2/3 h-48 flex items-end gap-2 relative">
          <!-- Grid lines -->
          <div class="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-10">
            <div class="border-t border-white w-full"></div>
            <div class="border-t border-white w-full"></div>
            <div class="border-t border-white w-full"></div>
          </div>

          <div v-for="(point, idx) in timeSeriesData" :key="idx"
            class="flex-1 flex flex-col justify-end group relative items-center">
            <div class="w-full bg-primary-500/50 group-hover:bg-primary-400 transition-all rounded-t-sm relative"
              :style="{ height: `${point.percent}%` }">
              <!-- Tooltip -->
              <div
                class="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-gray-900 text-[10px] px-2 py-1 rounded font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20 shadow-lg">
                {{ point.label }}: {{ point.count }} items
              </div>
            </div>
            <p class="text-[9px] text-gray-500 mt-2 font-mono hidden sm:block">{{ point.shortLabel }}</p>
          </div>
        </div>
      </div>
    </UCard>

    <!-- 2. CORRELATIONS & INSIGHTS (Cross-Field Analysis) -->
    <!-- Only show if we have both numeric and select fields -->
    <!-- <div v-if="correlations.length > 0" class="grid grid-cols-1 lg:grid-cols-2 gap-4">
       <UCard v-for="(insight, idx) in correlations" :key="idx" 
         class="ring-1 ring-gray-200 dark:ring-gray-800 shadow-sm border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800/50"
       >
         <template #header>
           <div class="flex items-center gap-2 mb-1">
             <div class="p-1.5 rounded-md bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
               <UIcon name="i-heroicons-light-bulb" class="w-4 h-4" />
             </div>
             <span class="text-xs font-bold text-indigo-500 uppercase tracking-wider">Insight</span>
           </div>
           <h3 class="font-bold text-gray-900 dark:text-white">
             Média de <span class="text-indigo-500">{{ insight.metricName }}</span> por <span class="text-indigo-500">{{ insight.categoryName }}</span>
           </h3>
         </template>

<div class="space-y-3">
  <div v-for="item in insight.data.slice(0, 5)" :key="item.category" class="space-y-1">
    <div class="flex justify-between text-xs">
      <span class="font-medium truncate w-1/2">{{ item.category }}</span>
      <span class="font-mono font-bold">{{ formatValue(item.value) }}</span>
    </div>
    <div class="h-1.5 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
      <div class="h-full bg-indigo-500 rounded-full" :style="{ width: `${(item.value / insight.maxValue) * 100}%` }">
      </div>
    </div>
  </div>
</div>
</UCard>
</div> -->

    <!-- 3. DETAILED STATS GRID -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

      <!-- NUMERIC FIELDS -->
      <UCard v-for="field in numericFields" :key="field.id"
        class="ring-1 ring-gray-200 dark:ring-gray-800 shadow-sm transition-all hover:ring-2 hover:ring-primary-500/20">
        <div class="flex items-start justify-between mb-4">
          <div>
            <p class="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-0.5">{{ field.name }}</p>
            <p class="text-2xl font-black font-mono">{{ formatValue(getAvg(field.id)) }} <span
                class="text-xs font-normal text-gray-400">média</span></p>
          </div>
          <UIcon name="i-heroicons-calculator" class="w-8 h-8 text-gray-100 dark:text-gray-800" />
        </div>

        <!-- Mini Min/Max Chart -->
        <div class="flex items-end gap-1 h-8 mt-2 pb-1 border-b border-gray-100 dark:border-gray-800 mb-2">
          <div class="w-1/3 bg-blue-100 dark:bg-blue-900/20 rounded-t h-full relative group">
            <span
              class="absolute -top-4 w-full text-center text-[9px] text-blue-500 font-bold opacity-0 group-hover:opacity-100 transition-opacity">Min</span>
          </div>
          <div class="w-1/3 bg-gray-100 dark:bg-gray-800 rounded-t h-1/2 mx-auto"></div>
          <div class="w-1/3 bg-orange-100 dark:bg-orange-900/20 rounded-t h-[80%] relative group">
            <span
              class="absolute -top-4 w-full text-center text-[9px] text-orange-500 font-bold opacity-0 group-hover:opacity-100 transition-opacity">Max</span>
          </div>
        </div>

        <div class="flex justify-between text-xs font-mono">
          <span class="text-blue-500">Min: {{ formatValue(getMin(field.id)) }}</span>
          <span class="text-orange-500">Max: {{ formatValue(getMax(field.id)) }}</span>
        </div>
      </UCard>

      <!-- DISTRIBUTION FIELDS (Categorical) -->
      <UCard v-for="field in distributionFields" :key="field.id"
        class="ring-1 ring-gray-200 dark:ring-gray-800 shadow-sm row-span-2">
        <template #header>
          <div class="flex items-center gap-2">
            <UIcon name="i-heroicons-chart-pie" class="w-4 h-4 text-gray-400" />
            <h3 class="font-bold text-sm">{{ field.name }}</h3>
          </div>
        </template>

        <div class="space-y-3">
          <!-- Search Bar (Only if expanded and more than 10 items) -->
          <div v-if="isExpanded(field.id) && getUniqueCount(field.id) > 10" class="mb-2">
            <UInput v-model="searchTerms[field.id]" icon="i-heroicons-magnifying-glass" size="xs" placeholder="Buscar..." :ui="{ icon: { trailing: { pointer: '' } } }">
              <template #trailing v-if="searchTerms[field.id]">
                 <UButton color="gray" variant="link" icon="i-heroicons-x-mark" :padded="false" @click="searchTerms[field.id] = ''" />
              </template>
            </UInput>
          </div>

          <!-- List Container -->
          <div :class="{'max-h-60 overflow-y-auto pr-1 custom-scrollbar': isExpanded(field.id) && getUniqueCount(field.id) > 5}">
             <div v-for="(count, option) in getDistribution(field.id, isExpanded(field.id))" :key="option" class="space-y-1.5 mb-3 last:mb-0">
                <div class="flex justify-between items-center text-xs">
                  <span class="font-semibold text-gray-700 dark:text-gray-300 truncate max-w-[150px]" :title="option">{{ option }}</span>
                  <div class="flex items-center gap-2">
                    <span class="font-mono">{{ count }}</span>
                    <span class="text-gray-400 bg-gray-100 dark:bg-gray-800 px-1.5 rounded text-[10px]">{{ getPercentage(count, items.length) }}%</span>
                  </div>
                </div>
                <UProgress :value="getPercentage(count, items.length)" size="md" color="primary" class="h-1.5 rounded-full" />
             </div>
             
             <!-- Empty Search State -->
             <div v-if="isExpanded(field.id) && Object.keys(getDistribution(field.id, true)).length === 0" class="text-center py-4 text-xs text-gray-400">
               Nenhum resultado encontrado
             </div>
          </div>
        </div>

        <template #footer>
          <button v-if="getUniqueCount(field.id) > 5" @click="toggleExpand(field.id)"
            class="w-full text-center text-[10px] font-bold uppercase tracking-wider text-gray-400 hover:text-primary-500 transition-colors py-1">
            {{ isExpanded(field.id) ? 'Mostrar menos' : `Mostrar mais (${getUniqueCount(field.id) - 5})` }}
          </button>
        </template>
      </UCard>
    </div>

  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  fields: any[]
  items: any[]
}>()

// --- Utilities ---
const formatValue = (val: number) => {
  if (Number.isInteger(val)) return val.toLocaleString()
  return val.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 2 })
}

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }).format(date)
}

// --- Basic Stats ---
const numericFields = computed(() => props.fields.filter(f => f.type === 'number'))
const distributionFields = computed(() => props.fields.filter(f => ['select', 'boolean'].includes(f.type)))
const dateFields = computed(() => props.fields.filter(f => f.type === 'date'))

// --- Expansion Logic (Generic) ---
const expandedStates = reactive(new Set<string>())
const toggleExpand = (id: string) => {
  if (expandedStates.has(id)) expandedStates.delete(id)
  else expandedStates.add(id)
}
const isExpanded = (id: string) => expandedStates.has(id)


// --- Math Helpers ---
const getSum = (fieldId: string) => {
  return props.items.reduce((acc, row) => {
    const val = Number(row[fieldId]) || 0
    return acc + val
  }, 0)
}

const getAvg = (fieldId: string) => {
  const validItems = props.items.filter(row => {
    const val = row[fieldId]
    return val !== null && val !== undefined && val !== '' && !isNaN(Number(val))
  })
  if (validItems.length === 0) return 0
  const sum = validItems.reduce((acc, row) => acc + Number(row[fieldId]), 0)
  return sum / validItems.length
}

const getMax = (fieldId: string) => {
  const vals = props.items.map(row => Number(row[fieldId]) || 0).filter(v => v !== 0)
  if (vals.length === 0) return 0
  return Math.max(...vals)
}

const getMin = (fieldId: string) => {
  const vals = props.items.map(row => Number(row[fieldId]) || 0).filter(v => v !== 0)
  if (vals.length === 0) return 0
  return Math.min(...vals)
}

// --- Distribution ---
const searchTerms = reactive<Record<string, string>>({})

const getDistribution = (fieldId: string, expanded: boolean) => {
  const counts: Record<string, number> = {}
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
  let sorted = Object.entries(counts).sort(([, a], [, b]) => b - a)

  // Filter if searching
  const term = searchTerms[fieldId]?.toLowerCase()
  if (expanded && term) {
    sorted = sorted.filter(([key]) => key.toLowerCase().includes(term))
  }

  const limit = (field?.type === 'boolean' || expanded) ? sorted.length : 5
  
  return Object.fromEntries(sorted.slice(0, limit))
}

const getUniqueCount = (fieldId: string) => {
  const unique = new Set(props.items.map(row => row[fieldId]))
  return unique.size
}

const getPercentage = (count: number, total: number) => {
  if (total === 0) return 0
  return Math.round((count / total) * 100)
}


// --- Advanced: Time Series ---
const sortedItemsByDate = computed(() => {
  return [...props.items].sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())
})
const oldestItemDate = computed(() => sortedItemsByDate.value[0] ? new Date(sortedItemsByDate.value[0].created_at) : new Date())
const newestItemDate = computed(() => sortedItemsByDate.value[props.items.length - 1] ? new Date(sortedItemsByDate.value[props.items.length - 1].created_at) : new Date())

const itemsLastMonth = computed(() => {
  const thirtyDaysAgo = new Date()
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
  return props.items.filter(i => new Date(i.created_at) >= thirtyDaysAgo).length
})

const growthRate = computed(() => {
  if (props.items.length === 0) return 0
  const current = itemsLastMonth.value
  const previous = props.items.length - current
  if (previous === 0) return 100
  return Math.round(((current) / previous) * 100)
})

const timeSeriesData = computed(() => {
  if (props.items.length === 0) return []

  // Group by month YYYY-MM
  const groups: Record<string, number> = {}
  const now = new Date()
  // Generate last 12 months keys
  for (let i = 11; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1)
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`
    groups[key] = 0
  }

  props.items.forEach(item => {
    const d = new Date(item.created_at)
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`
    if (groups[key] !== undefined) groups[key]++
  })

  const maxCount = Math.max(...Object.values(groups), 1)

  return Object.entries(groups).map(([key, count]) => {
    const [y, m] = key.split('-')
    const date = new Date(Number(y), Number(m) - 1)
    return {
      label: date.toLocaleString('pt-BR', { month: 'long', year: 'numeric' }),
      shortLabel: date.toLocaleString('pt-BR', { month: 'short' }),
      count,
      percent: (count / maxCount) * 100
    }
  })
})


// --- Advanced: Correlations (Avg Numeric per Categorical) ---
const correlations = computed(() => {
  const results: any[] = []

  // Find all pairs of (Number Field) x (Select Field)
  numericFields.value.forEach(numField => {
    distributionFields.value.forEach(catField => {
      if (catField.type === 'boolean') return // Skip booleans for now to keep simple

      // Calculate Avg Num per Cat Value
      const groups: Record<string, { sum: number, count: number }> = {}

      props.items.forEach(row => {
        const catVal = row[catField.id] || 'N/A'
        const numVal = Number(row[numField.id])

        if (!isNaN(numVal) && numVal !== 0) { // filter zeros/invalid
          if (!groups[catVal]) groups[catVal] = { sum: 0, count: 0 }
          groups[catVal].sum += numVal
          groups[catVal].count++
        }
      })

      // Filter out trivial results (less than 2 groups)
      const groupKeys = Object.keys(groups)
      if (groupKeys.length < 2) return

      // Compute averages
      const data = groupKeys.map(cat => ({
        category: cat,
        value: groups[cat].sum / groups[cat].count
      })).sort((a, b) => b.value - a.value)

      // Calculate Variance/Spread (Max - Min) to see if interesting
      const max = data[0].value
      const min = data[data.length - 1].value
      const spread = max - min

      if (spread > 0) {
        results.push({
          metricName: numField.name,
          categoryName: catField.name,
          maxValue: max,
          data
        })
      }
    })
  })

  // Return top 2 most interesting insights (highest spread?)
  // For now first 2
  return results.slice(0, 2)
})

</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Custom Scrollbar for Distributions */
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #cbd5e1;
  border-radius: 20px;
}
.dark .custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #475569;
}
</style>
