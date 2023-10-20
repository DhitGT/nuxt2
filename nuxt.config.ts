// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@vite-pwa/nuxt"],
  tailwindcss:{
    cssPath: '~/assets/css/tailwind.css',
    configPath: '~tailwind.config.ts',
  },
  pwa: {
    manifest: {
      theme_color: "#e029e0",
      background_color: "#dc87dc",
      display: "standalone",
      orientation: "portrait",
      scope: "/",
      start_url: "/",
      name: "Dheep",
      short_name: "Dheep",
      description: "Website",
      icons: [
        {
          src: "/icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/icon-256x256.png",
          sizes: "256x256",
          type: "image/png",
        },
        {
          src: "/icon-384x384.png",
          sizes: "384x384",
          type: "image/png",
        },
        {
          src: "/icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
      
    },
    devOptions: {
        enabled: true,
      },
  },
});
