import packageJson from './package.json'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  // @keep-sorted
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
  ],

  ssr: false,
  devtools: { enabled: true },

  app: {
    baseURL: '/mini-clock-overlay/',
  },

  css: ['~/assets/css/main.css'],

  colorMode: {
    preference: 'light',
    fallback: 'light',
  },

  runtimeConfig: {
    public: {
      appVersion: packageJson.version,
    },
  },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2025-07-27',

  eslint: {
    config: {
      stylistic: true,
    },
  },

  googleFonts: {
    download: true,
    families: {
      'Roboto+Mono': true,
      'Martian+Mono': true,
    },
  },
})
