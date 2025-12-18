<template>
  <div class="space-y-6">
    <UCard>
      <template #header>
        <h3 class="font-semibold">Configurações de Visibilidade</h3>
      </template>

      <div class="space-y-4">
        <URadioGroup 
          v-model="visibility" 
          :options="visibilityOptions"
          legend="Quem pode ver esta coleção?"
        />
      </div>
    </UCard>

    <UCard v-if="visibility === 'shared'">
      <template #header>
        <h3 class="font-semibold">Compartilhado com</h3>
      </template>

      <div class="space-y-4">
        <div class="flex gap-2">
          <UInput 
            v-model="emailInput" 
            placeholder="Digite o e-mail do usuário..." 
            class="flex-1" 
            :loading="searching"
            @keyup.enter="addUser"
          />
          <UButton icon="i-heroicons-paper-airplane" @click="addUser" :loading="adding">Adicionar</UButton>
        </div>

        <div v-if="shares.length === 0" class="text-gray-500 text-sm italic">
          Não compartilhado com ninguém ainda.
        </div>

        <div v-else class="space-y-2">
          <div v-for="share in shares" :key="share.id" class="flex justify-between items-center bg-gray-50 dark:bg-gray-800 p-2 rounded">
            <div class="flex items-center gap-2">
              <UAvatar :src="share.profiles?.avatar_url" :alt="share.profiles?.full_name" size="xs" />
              <div class="text-sm">
                <div class="font-medium">{{ share.profiles?.full_name || 'Unknown' }}</div>
                <div class="text-xs text-gray-500">{{ share.profiles?.email }}</div>
              </div>
            </div>
            <UButton icon="i-heroicons-trash" color="red" variant="ghost" size="xs" @click="removeUser(share.id)" />
          </div>
        </div>
      </div>
    </UCard>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: 'private' | 'shared' | 'public'
  collectionId?: string
}>()

const emit = defineEmits(['update:modelValue'])

const supabase = useSupabaseClient()
const toast = useToast()

const visibility = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})

const visibilityOptions = [
  { value: 'private', label: 'Privado (Apenas eu)' },
  { value: 'shared', label: 'Compartilhado (Usuários específicos)' },
  { value: 'public', label: 'Público (Qualquer pessoa pode ver na aba "Explorar")' }
]

const emailInput = ref('')
const searching = ref(false)
const adding = ref(false)
const shares = ref<any[]>([])

// Load shares
const loadShares = async () => {
  if (!props.collectionId) return
  
  const { data, error } = await supabase
    .from('collection_shares')
    .select(`id, user_id, profiles ( id, email, full_name, avatar_url )`)
    .eq('collection_id', props.collectionId)
  
  if (!error && data) {
    shares.value = data
  }
}

watch(() => props.collectionId, loadShares, { immediate: true })

const addUser = async () => {
  if (!emailInput.value || !props.collectionId) return
  
  adding.value = true
  try {
    // 1. Find User ID
    const { data: users, error: searchError } = await supabase
      .from('profiles')
      .select('id')
      .eq('email', emailInput.value)
      .single()
      
    if (searchError || !users) {
      toast.add({ title: 'Usuário não encontrado', description: 'Nenhum usuário encontrado com este e-mail.', color: 'red' })
      return
    }

    // 2. Add Share
    const { error: shareError } = await supabase
      .from('collection_shares')
      .insert({
        collection_id: props.collectionId,
        user_id: users.id
      })
    
    if (shareError) {
      if (shareError.code === '23505') { // Unique violation
         toast.add({ title: 'Já compartilhado', description: 'Usuário já tem acesso.', color: 'orange' })
      } else {
         throw shareError
      }
    } else {
      toast.add({ title: 'Adicionado', color: 'green' })
      emailInput.value = ''
      loadShares()
    }

  } catch (error: any) {
    toast.add({ title: 'Erro', description: error.message, color: 'red' })
  } finally {
    adding.value = false
  }
}

const removeUser = async (shareId: string) => {
  if (!confirm('Remover acesso para este usuário?')) return
  
  const { error } = await supabase.from('collection_shares').delete().eq('id', shareId)
  
  if (error) {
    toast.add({ title: 'Erro', description: error.message, color: 'red' })
  } else {
    loadShares()
  }
}
</script>
