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
  },
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap' }
      ],
      style: [
        { children: 'body { font-family: "Inter", sans-serif; }' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  }
})
