<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
    <UCard class="w-full max-w-md">
      <template #header>
        <h1 class="text-xl font-bold text-center">Bem-vindo de volta</h1>
      </template>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <UFormGroup label="E-mail" name="email">
          <UInput v-model="email" type="email" placeholder="seu@email.com" required />
        </UFormGroup>

        <UFormGroup label="Senha" name="password">
          <UInput v-model="password" type="password" required />
        </UFormGroup>

        <UButton type="submit" block :loading="loading">Entrar</UButton>
      </form>

      <div class="relative my-6">
        <div class="absolute inset-0 flex items-center">
          <span class="w-full border-t" />
        </div>
        <div class="relative flex justify-center text-sm">
          <span class="px-2 bg-white dark:bg-gray-800 text-gray-500">Ou continue com</span>
        </div>
      </div>

      <UButton
        block
        color="white"
        variant="solid"
        icon="i-logos-google-icon"
        @click="handleGoogleLogin"
      >
        Google
      </UButton>

      <template #footer>
        <p class="text-sm text-center text-gray-500">
          Não tem uma conta?
          <NuxtLink to="/register" class="text-primary-600 hover:underline">Cadastre-se</NuxtLink>
        </p>
      </template>
    </UCard>
  </div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient()
const user = useSupabaseUser()
const toast = useToast()

const email = ref('')
const password = ref('')
const loading = ref(false)

// Redirect if already logged in
watchEffect(() => {
  if (user.value) {
    navigateTo('/dashboard')
  }
})

const handleLogin = async () => {
  try {
    loading.value = true
    const { error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    })
    if (error) throw error
    toast.add({ title: 'Sucesso', description: 'Login realizado com sucesso', color: 'green' })
    navigateTo('/dashboard')
  } catch (error: any) {
    toast.add({ title: 'Error', description: error.message, color: 'red' })
  } finally {
    loading.value = false
  }
}

const handleGoogleLogin = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${window.location.origin}/confirm`, // We'll create this page
    }
  })
  if (error) {
    toast.add({ title: 'Error', description: error.message, color: 'red' })
  }
}
</script>
