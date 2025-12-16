// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/supabase', '@nuxthub/core', '@nuxthub/core-nightly'],
  hub: {
    // NuxtHub configuration
  },
  supabase: {
    redirect: false, // We will handle redirects manually with middleware
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      exclude: ['/', '/register']
    }
  },
  runtimeConfig: {
    public: {
      // Supabase keys will be picked up from .env automatically by the module
      // SUPABASE_URL and SUPABASE_KEY
    }
  }
})