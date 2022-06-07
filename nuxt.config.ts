import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // If you have enabled `Take Over Mode` or installed the `TypeScript Vue Plugin (Volar)`,
  // you can disable generating the shim for *.vue files:
  shim: false,
  strict: true,
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    }
  },
  css: ['@/assets/css/app.scss'],
  modules: [
    '@pinia/nuxt'
  ],
})
