<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
    <UCard class="w-full max-w-md">
      <template #header>
        <h1 class="text-xl font-bold text-center">Bem-vindo ao Gerenciador de Coleções</h1>
      </template>

      <div class="space-y-6 py-4">
        <p class="text-center text-gray-500 text-sm">Entre com sua conta para gerenciar suas coleções com segurança e rapidez.</p>
        
        <UButton
          block
          color="white"
          variant="solid"
          size="lg"
          icon="i-logos-google-icon"
          to="/auth/google"
          external
        >
          Entrar com Google
        </UButton>

        <UButton
          block
          color="gray"
          variant="ghost"
          size="lg"
          icon="i-logos-github-icon"
          to="/auth/github"
          external
        >
          Entrar com GitHub
        </UButton>
      </div>

      <template #footer>
        <p class="text-[10px] text-center text-gray-400 uppercase tracking-widest font-bold">
          Powered by Cloudflare + Nuxt
        </p>
      </template>
    </UCard>
  </div>
</template>

<script setup lang="ts">
const { loggedIn } = useUserSession()

// Redirect if already logged in
watchEffect(() => {
  if (loggedIn.value) {
    navigateTo('/dashboard')
  }
})
</script>
