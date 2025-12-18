<template>
  <div class="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
    <!-- Premium Navbar with Glassmorphism -->
    <header class="sticky top-0 z-50 w-full border-b border-gray-200/50 dark:border-gray-800/50 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
      <div class="container mx-auto px-4 h-16 flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/dashboard" class="flex items-center gap-2 group">
          <div class="w-8 h-8 rounded-lg bg-primary-500 flex items-center justify-center text-white shadow-lg shadow-primary-500/30 group-hover:scale-110 transition-transform">
            <UIcon name="i-heroicons-rectangle-stack" class="w-5 h-5" />
          </div>
          <span class="font-bold text-lg tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            Collector
          </span>
        </NuxtLink>

        <!-- Navigation Links (Center) -->
        <nav class="hidden md:flex items-center gap-1 bg-gray-100/50 dark:bg-gray-800/50 p-1 rounded-full border border-gray-200/50 dark:border-gray-700/50">
          <UButton 
            to="/dashboard" 
            variant="ghost" 
            color="gray" 
            size="sm"
            active-class="bg-white dark:bg-gray-700 shadow-sm text-primary-500"
            class="rounded-full px-4"
          >
            Dashboard
          </UButton>
          <UButton 
            to="/explore" 
            variant="ghost" 
            color="gray" 
            size="sm"
            active-class="bg-white dark:bg-gray-700 shadow-sm text-primary-500"
            class="rounded-full px-4"
          >
            Explorar
          </UButton>
        </nav>

        <!-- Right Side: User & Theme -->
        <div class="flex items-center gap-3">
          <ClientOnly>
             <UButton
               :icon="isDark ? 'i-heroicons-moon' : 'i-heroicons-sun'"
               color="gray"
               variant="ghost"
               aria-label="Theme"
               @click="isDark = !isDark"
             />
          </ClientOnly>

          <UDropdown v-if="user" :items="userItems" :popper="{ placement: 'bottom-end' }">
            <UAvatar 
              :src="user.user_metadata.avatar_url" 
              :alt="user.user_metadata.full_name"
              size="sm"
              class="ring-2 ring-white dark:ring-gray-900 cursor-pointer hover:ring-primary-500 transition-all"
            />
          </UDropdown>
          
          <UButton v-else to="/login" color="primary" variant="solid" size="sm">
            Entrar
          </UButton>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-1 container mx-auto px-4 py-6 md:py-8">
      <slot />
    </main>
    
    <!-- Footer -->
    <footer class="border-t border-gray-200 dark:border-gray-800 py-6 mt-12 bg-white dark:bg-gray-900">
      <div class="container mx-auto px-4 text-center text-sm text-gray-500">
        <p>&copy; {{ new Date().getFullYear() }} Collector App.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const user = useSupabaseUser()
const supabase = useSupabaseClient()
const colorMode = useColorMode()

const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

const userItems = [
  [{
    label: user.value?.user_metadata.full_name || 'Usuário',
    slot: 'account',
    disabled: true
  }],
  [{
    label: 'Configurações',
    icon: 'i-heroicons-cog-8-tooth',
    to: '/settings'
  }],
  [{
    label: 'Sair',
    icon: 'i-heroicons-arrow-left-on-rectangle',
    click: async () => {
      await supabase.auth.signOut()
      navigateTo('/login')
    }
  }]
]
</script>
