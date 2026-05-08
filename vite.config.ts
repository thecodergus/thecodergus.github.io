import { defineConfig } from "vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      "~/": path.resolve(__dirname, "src") + "/"
    },
    extensions: [".tsx", ".ts", ".jsx", ".js"]
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (id.includes("three/examples/jsm")) return "three-examples";
          if (id.includes("three")) return "three";
          return "vendor";
        },
      },
    },
  }
});
