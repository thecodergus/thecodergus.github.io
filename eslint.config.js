import js from "@eslint/js";
import tseslint from "typescript-eslint";
import solid from "eslint-plugin-solid";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["src/**/*.{ts,tsx}"],
    plugins: { solid },
    rules: {
      "solid/reactivity": "warn",
      "solid/no-destructure": "error",
      "solid/jsx-no-undef": "error",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/explicit-function-return-type": "off",
    },
  },
  {
    ignores: [
      ".output/",
      "node_modules/",
      "dist/",
      "*.config.{js,ts}",
      "vitest.setup.ts",
    ],
  },
);
