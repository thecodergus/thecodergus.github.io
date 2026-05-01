import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: {
    preset: "static",
    prerender: {
      crawlLinks: true,
      routes: ["/", "/doom"]
    }
  },
  vite: {
    plugins: [tailwindcss()],
    css: {
      devSourcemap: true
    }
  }
});
