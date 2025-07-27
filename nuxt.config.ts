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

  ui: {
    // OBS オーバーレイのため常にライトテーマ
    colorMode: false,
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
    // @keep-sorted
    families: {
      'Martian+Mono': true,
      'Roboto+Mono': true,
    },
  },
})
