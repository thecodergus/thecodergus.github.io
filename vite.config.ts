import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "~/": "/src/"
    },
    extensions: [".tsx", ".ts", ".jsx", ".js"]
  },
  build: {
    rollupOptions: {
      external: ["react", "react-dom"]
    }
  }
});
