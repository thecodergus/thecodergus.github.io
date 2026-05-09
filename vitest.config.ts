import { defineConfig } from "vitest/config";
import path from "node:path";
import solid from "vite-plugin-solid";

export default defineConfig({
  plugins: [solid()],
  resolve: {
    conditions: ["browser"],
    alias: {
      "~/": path.resolve(__dirname, "src") + "/",
    },
  },
  test: {
    transformMode: {
      web: [/.[jt]sx?$/],
    },
    environment: "jsdom",
    globals: true,
    include: ["src/**/*.test.{ts,tsx}"],
    setupFiles: ["./vitest.setup.ts"],
  },
});
