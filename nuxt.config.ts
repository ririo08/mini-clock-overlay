// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  ssr: false,

  app: {
    baseURL: '/mini-clock-overlay/'
  },

  modules: [
    "@nuxt/ui",
    "@nuxt/eslint",
    "@vueuse/nuxt",
    "@nuxtjs/google-fonts",
  ],

  colorMode: {
    preference: 'light'
  },

  googleFonts: {
    download: true,
    families: {
      'Roboto+Mono': true,
      'Martian+Mono': true
    }
  },
  
  compatibilityDate: "2024-08-30",
})