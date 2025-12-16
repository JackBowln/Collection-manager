<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
    <UCard class="w-full max-w-md">
      <template #header>
        <h1 class="text-xl font-bold text-center">Create Account</h1>
      </template>

      <form @submit.prevent="handleRegister" class="space-y-4">
        <UFormGroup label="Full Name" name="fullName">
          <UInput v-model="fullName" placeholder="John Doe" required />
        </UFormGroup>

        <UFormGroup label="Email" name="email">
          <UInput v-model="email" type="email" placeholder="you@example.com" required />
        </UFormGroup>

        <UFormGroup label="Password" name="password">
          <UInput v-model="password" type="password" required minlength="6" />
        </UFormGroup>

        <UButton type="submit" block :loading="loading">Sign Up</UButton>
      </form>

      <template #footer>
        <p class="text-sm text-center text-gray-500">
          Already have an account?
          <NuxtLink to="/login" class="text-primary-600 hover:underline">Sign in</NuxtLink>
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
const fullName = ref('')
const loading = ref(false)

watchEffect(() => {
  if (user.value) {
    navigateTo('/dashboard')
  }
})

const handleRegister = async () => {
  try {
    loading.value = true
    const { error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
      options: {
        data: {
          full_name: fullName.value,
        }
      }
    })
    if (error) throw error
    toast.add({ title: 'Check your email', description: 'We sent you a confirmation link.', color: 'green' })
  } catch (error: any) {
    toast.add({ title: 'Error', description: error.message, color: 'red' })
  } finally {
    loading.value = false
  }
}
</script>
