// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@pinia/nuxt", "nuxt-icon", '@nuxt/test-utils/module'],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  pinia: {
    autoImports: ["defineStore"],
  },
  imports: { dirs: ["./stores"] },
  components: [
    {
      global: true,
      dirs: ["~/components"],
    },
  ],
});
