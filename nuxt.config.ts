export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  runtimeConfig: {
    DB_HOST: process.env.DB_HOST || "",
    DB_USER: process.env.DB_USER || "",
    DB_PASS: process.env.DB_PASS || "",
    DB_NAME: process.env.DB_NAME || "",
    DB_PORT: process.env.DB_PORT || "", // 確保有讀到
  },
});
