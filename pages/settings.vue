<template>
  <div class="max-w-2xl mx-auto py-8">
    <div class="flex items-center gap-4 mb-8">
      <h1 class="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">Minha Conta</h1>
    </div>

    <div class="space-y-6">
      <!-- Profile Section -->
      <UCard>
        <template #header>
          <div class="flex items-center gap-3">
             <div class="p-2 bg-primary-50 dark:bg-primary-900/20 rounded-lg text-primary-500">
               <UIcon name="i-heroicons-user" class="w-5 h-5" />
             </div>
             <h3 class="font-semibold text-lg">Perfil</h3>
          </div>
        </template>

        <form @submit.prevent="updateProfile" class="space-y-6">
          <!-- Avatar Preview -->
          <div class="flex flex-col items-center sm:flex-row gap-6 mb-6">
             <div class="relative group cursor-pointer" @click="triggerFileInput">
                <UAvatar 
                  :src="form.avatar_url || (user as any)?.avatar" 
                  :alt="form.full_name" 
                  size="3xl" 
                  class="ring-4 ring-gray-100 dark:ring-gray-800 transition-opacity group-hover:opacity-75"
                />
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <UIcon name="i-heroicons-camera" class="w-8 h-8 text-gray-800 dark:text-white drop-shadow-md" />
                </div>
                <!-- Loading Overlay -->
                <div v-if="uploading" class="absolute inset-0 bg-white/50 dark:bg-black/50 rounded-full flex items-center justify-center">
                   <UIcon name="i-heroicons-arrow-path" class="w-8 h-8 animate-spin text-primary-500" />
                </div>
             </div>
             
             <input 
               ref="fileInput" 
               type="file" 
               class="hidden" 
               accept="image/*"
               @change="handleFileUpload" 
             />

             <div class="flex-1 w-full space-y-4">
                <div class="flex gap-2">
                   <UButton color="white" icon="i-heroicons-arrow-up-tray" :loading="uploading" @click="triggerFileInput">
                     Upload de Foto
                   </UButton>
                   <UButton v-if="form.avatar_url" color="red" variant="ghost" icon="i-heroicons-trash" size="xs" @click="form.avatar_url = ''" />
                </div>
                
                <UFormGroup label="Ou URL do Avatar" help="Link externo para imagem">
                  <UInput v-model="form.avatar_url" icon="i-heroicons-photo" placeholder="https://..." />
                </UFormGroup>
             </div>
          </div>

          <div class="grid gap-6">
            <UFormGroup label="Nome Completo" required>
              <UInput v-model="form.full_name" icon="i-heroicons-identification" />
            </UFormGroup>

            <UFormGroup label="E-mail" help="O e-mail não pode ser alterado.">
              <UInput :model-value="(user as any)?.email" icon="i-heroicons-envelope" disabled color="gray" />
            </UFormGroup>
          </div>
          
          <div class="flex justify-end pt-4">
            <UButton type="submit" :loading="loading" size="lg">
              Salvar Alterações
            </UButton>
          </div>
        </form>
      </UCard>

      <!-- Preferences Section (Placeholder for now) -->
      <UCard>
        <template #header>
          <div class="flex items-center gap-3">
             <div class="p-2 bg-gray-50 dark:bg-gray-800 rounded-lg text-gray-500">
               <UIcon name="i-heroicons-adjustments-horizontal" class="w-5 h-5" />
             </div>
             <h3 class="font-semibold text-lg">Preferências</h3>
          </div>
        </template>
        
        <div class="flex items-center justify-between py-2">
           <div class="flex flex-col">
              <span class="font-medium">Tema Escuro</span>
              <span class="text-sm text-gray-500">Alternar entre modo claro e escuro.</span>
           </div>
           
           <UToggle 
             size="lg" 
             :model-value="colorMode.value === 'dark'"
             @update:model-value="toggleTheme"
            />
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">
const { user } = useUserSession()
const toast = useToast()
const colorMode = useColorMode()

const loading = ref(false)
const form = reactive({
  full_name: '',
  avatar_url: ''
})

// Initialize form
watchEffect(() => {
  if (user.value) {
    form.full_name = (user.value as any).name || ''
    form.avatar_url = (user.value as any).avatar || ''
  }
})

const toggleTheme = (val: boolean) => {
  colorMode.preference = val ? 'dark' : 'light'
}

const uploading = ref(false)
const fileInput = ref<HTMLInputElement | null>(null)

const triggerFileInput = () => {
  fileInput.value?.click()
}

const handleFileUpload = async (event: any) => {
  const file = event.target.files[0]
  if (!file || !user.value) return

  if (!file.type.startsWith('image/')) {
    toast.add({ title: 'Erro', description: 'Por favor envie apenas imagens.', color: 'red' })
    return
  }

  try {
    uploading.value = true
    const formData = new FormData()
    formData.append('file', file)

    const data = await $fetch('/api/user/avatar', {
      method: 'POST',
      body: formData
    })

    form.avatar_url = (data as any).url
    toast.add({ title: 'Upload concluído', color: 'green' })

  } catch (error: any) {
    toast.add({ title: 'Erro no Upload', description: error.message, color: 'red' })
  } finally {
    uploading.value = false
  }
}

const updateProfile = async () => {
  try {
    loading.value = true
    
    await $fetch('/api/user/profile', {
      method: 'PATCH',
      body: {
        full_name: form.full_name,
        avatar_url: form.avatar_url
      }
    })

    toast.add({ title: 'Perfil atualizado', color: 'green' })
    
  } catch (error: any) {
    toast.add({ title: 'Erro ao atualizar', description: error.message, color: 'red' })
  } finally {
    loading.value = false
  }
}
</script>
