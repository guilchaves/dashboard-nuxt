export default defineNuxtConfig({
  devServer: {
    port: 4000,
    host: '127.0.0.1'
  },

  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', 'nuxt-icon'],

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },

  compatibilityDate: '2024-09-24'
})
