export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/sass/main.sass'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
