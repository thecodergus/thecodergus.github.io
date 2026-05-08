import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  server: {
    preset: "static",
    prerender: {
      crawlLinks: true,
      routes: ["/", "/doom"]
    }
  },
  vite: {
    plugins: [
      tailwindcss(),
      VitePWA({
        registerType: "autoUpdate",
        includeAssets: ["favicon.ico", "robots.txt"],
        manifest: false,
        showMaximumFileSizeToCacheInBytesWarning: true,
        workbox: {
          maximumFileSizeToCacheInBytes: 2.5 * 1024 * 1024,
          globPatterns: ["**/*.{js,css,html,png,jpg,jpeg,gif,webp,json,woff2,ico,ttf}"],
          globIgnores: ["**/three*.js", "**/vendor*.js", "**/three-examples*.js"],
        },
      }),
    ],
    css: {
      devSourcemap: true
    }
  }
});
