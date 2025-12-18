<template>
  <div class="p-4">
    <!-- Header -->
    <div class="mb-6 flex flex-col md:flex-row justify-between md:items-center gap-4">
      <div>
        <div class="flex items-center gap-2 mb-1">
           <UButton to="/dashboard" icon="i-heroicons-arrow-left" variant="ghost" color="gray" size="sm" />
           <h1 class="text-2xl font-bold">{{ collection?.name || 'Carregando...' }}</h1>
        </div>
        <p class="text-gray-500 text-sm ml-9">{{ collection?.description }}</p>
      </div>
      <div class="flex gap-2">
        <UButton 
          v-if="selectedItems.length > 0" 
          color="red" 
          variant="soft" 
          icon="i-heroicons-trash" 
          @click="deleteSelectedItems"
        >
          Excluir ({{ selectedItems.length }})
        </UButton>
        <UButton variant="outline" icon="i-heroicons-arrow-up-tray" @click="isOpenImport = true">Importar Excel</UButton>
        <UButton icon="i-heroicons-plus" @click="openCreateModal">Novo Item</UButton>
      </div>
    </div>

    <!-- Filters/Search -->
    <div class="mb-4 flex flex-col md:flex-row gap-2">
      <UInput v-model="searchQuery" icon="i-heroicons-magnifying-glass" placeholder="Buscar em todas as colunas..." class="w-full md:w-64" />
      
      <UPopover>
        <UButton color="white" icon="i-heroicons-funnel" trailing-icon="i-heroicons-chevron-down">
           Filtros {{ activeFiltersCount > 0 ? `(${activeFiltersCount})` : '' }}
        </UButton>
        <template #panel>
          <div class="p-4 w-80 space-y-4">
            <h4 class="font-bold text-sm">Filtros Ativos</h4>
            <div v-for="field in fields" :key="field.id" class="flex flex-col gap-1">
               <label class="text-xs font-medium text-gray-500">{{ field.name }}</label>
               <UInput 
                  v-model="filters[field.id]" 
                  size="xs" 
                  :placeholder="`Filtrar por ${field.name}`" 
               />
            </div>
            <UButton v-if="activeFiltersCount > 0" size="xs" color="gray" variant="ghost" block @click="clearFilters">Limpar Todos</UButton>
          </div>
        </template>
      </UPopover>
    </div>

    <!-- Table -->
    <UTable
      v-model="selectedItems"
      :rows="filteredRows"
      :columns="tableColumns"
      :loading="pending"
      class="w-full"
    >
      <template #actions-data="{ row }">
        <div class="flex gap-1 justify-end">
          <UButton icon="i-heroicons-pencil-square" size="xs" color="gray" variant="ghost" @click="openEditModal(row)" />
          <UButton icon="i-heroicons-trash" size="xs" color="red" variant="ghost" @click="deleteItem(row.id)" />
        </div>
      </template>

      <!-- Custom Cell Rendering for Multiselect/Boolean/Date -->
      <template v-for="col in dynamicColumns" :key="col.key" #[`${col.key}-data`]="{ row }">
         <span v-if="col.type === 'boolean'">
            <UBadge :color="row[col.key] ? 'green' : 'gray'" variant="soft">{{ row[col.key] ? 'Sim' : 'Não' }}</UBadge>
         </span>
         <span v-else-if="col.type === 'multiselect'">
            {{ Array.isArray(row[col.key]) ? row[col.key].join(', ') : row[col.key] }}
         </span>
         <span v-else>
            {{ row[col.key] }}
         </span>
      </template>
    </UTable>

    <!-- Create/Edit Modal -->
    <UModal v-model="isOpen">
      <UCard>
        <template #header>
          <div class="font-bold">{{ editingItemId ? 'Editar Item' : 'Novo Item' }}</div>
        </template>

        <ItemForm
          v-if="fields.length > 0"
          :fields="fields"
          :initial-data="editingItemData"
          :loading="saving"
          @save="handleSave"
          @cancel="isOpen = false"
        />
      </UCard>
    </UModal>
    
    <!-- Import Modal -->
    <UModal v-model="isOpenImport">
       <UCard>
         <template #header>Importar do Excel</template>
         <ImportWizard 
            v-if="isOpenImport" 
            :collection-id="collectionId" 
            :collection-fields="fields" 
            @close="isOpenImport = false"
            @refresh="loadData"
         />
       </UCard>
    </UModal>

    <!-- Comments -->
    <CommentSection :collection-id="collectionId" />

  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const collectionId = route.params.id as string
const supabase = useSupabaseClient()
const toast = useToast()

const collection = ref<any>(null)
const fields = ref<any[]>([])
const items = ref<any[]>([])
const pending = ref(true)
const selectedItems = ref<any[]>([])

// Modal State
const isOpen = ref(false)
const isOpenImport = ref(false)
const editingItemId = ref<string | null>(null)
const editingItemData = ref<any>({})
const saving = ref(false)

// Filter State
const searchQuery = ref('')
const filters = ref<Record<string, string>>({})

const activeFiltersCount = computed(() => {
  return Object.values(filters.value).filter(val => val && val.trim() !== '').length
})

const clearFilters = () => {
  filters.value = {}
}

// Load Data
const loadData = async () => {
  pending.value = true
  try {
    // 1. Get Collection & Fields
    const { data: colData, error: colError } = await supabase
      .from('collections')
      .select(`*, fields (*)`)
      .eq('id', collectionId)
      .single()
    
    if (colError) throw colError
    
    collection.value = colData
    // Sort fields by order
    fields.value = (colData.fields || []).sort((a: any, b: any) => a.folder_order - b.folder_order)

    // 2. Get Items & Values
    // Note: Supabase doesn't easily return a pivot table. We fetch Items -> ItemValues
    const { data: itemData, error: itemError } = await supabase
      .from('items')
      .select(`id, created_at, item_values ( field_id, value )`)
      .eq('collection_id', collectionId)
      .order('created_at', { ascending: false })

    if (itemError) throw itemError
    items.value = itemData || []

  } catch (error: any) {
    toast.add({ title: 'Error', description: error.message, color: 'red' })
  } finally {
    pending.value = false
  }
}

onMounted(() => {
  loadData()
})

// Computed Table Rows (Pivot)
const rows = computed(() => {
  return items.value.map(item => {
    const row: any = { id: item.id, created_at: item.created_at }
    item.item_values.forEach((iv: any) => {
      row[iv.field_id] = iv.value
    })
    return row
  })
})

const filteredRows = computed(() => {
  let result = rows.value

  // 1. Search Query
  if (searchQuery.value) {
    const q = searchQuery.value.toLowerCase()
    result = result.filter(row => {
      // Search visible fields mainly
      return Object.values(row).some(val => String(val).toLowerCase().includes(q))
    })
  }

  // 2. Column Filters
  for (const [fieldId, filterValue] of Object.entries(filters.value)) {
    if (filterValue && filterValue.trim() !== '') {
       const q = filterValue.toLowerCase()
       result = result.filter(row => {
          const val = row[fieldId]
          return String(val ?? '').toLowerCase().includes(q)
       })
    }
  }

  return result
})

// Dynamic Columns
const dynamicColumns = computed(() => {
  return fields.value.filter(f => f.visible).map(f => ({
    key: f.id,
    label: f.name,
    sortable: true,
    type: f.type
  }))
})

const tableColumns = computed(() => {
  return [
    ...dynamicColumns.value,
    { key: 'actions', label: 'Ações' }
  ]
})

// Actions
// ...
const handleSave = async (formData: any) => {
// ...
  try{
    toast.add({ title: 'Sucesso', description: 'Item salvo', color: 'green' })
    isOpen.value = false
    loadData() // Reload table

  } catch (error: any) {
    toast.add({ title: 'Erro', description: error.message, color: 'red' })
  } finally {
    saving.value = false
  }
}

const deleteItem = async (id: string) => {
  if (!confirm('Excluir item?')) return
  const { error } = await supabase.from('items').delete().eq('id', id)
  if (error) {
    toast.add({ title: 'Erro', description: error.message, color: 'red' })
  } else {
    toast.add({ title: 'Excluído', color: 'green' })
    items.value = items.value.filter(i => i.id !== id)
  }
}

const deleteSelectedItems = async () => {
  const count = selectedItems.value.length
  if (count === 0) return
  if (!confirm(`Tem certeza que deseja excluir ${count} itens?`)) return

  const ids = selectedItems.value.map(i => i.id)
  
  const { error } = await supabase
    .from('items')
    .delete()
    .in('id', ids)

  if (error) {
    toast.add({ title: 'Erro', description: error.message, color: 'red' })
  } else {
    toast.add({ title: 'Excluído', description: `${count} itens excluídos`, color: 'green' })
    items.value = items.value.filter(i => !ids.includes(i.id))
    selectedItems.value = []
  }
}
</script>
