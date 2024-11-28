// [nuxt.config.ts](https://nuxt.com/docs/guide/directory-structure/nuxt-config)
export default defineNuxtConfig({
  // compatibilityDate 屬性 : 將 Nuxt3 的功能和行為鎖定在 2024-04-03 之前的版本，
  // 避免之後 Nuxt3 新版本的寫法調整會影響到目前專案的運作
  compatibilityDate: '2024-04-03',

  // 啟用 Nuxt DevTools 開發工具
  devtools: { enabled: true },
  css: ['@/assets/styles/all.scss'],
});
