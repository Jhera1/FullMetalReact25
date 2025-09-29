import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
  files: ["**/*.{js,mjs,cjs,jsx}"],
  plugins: ["@eslint/js"],
  extends: ["js/recommended"],
  languageOptions: { globals: globals.browser },
  rules: { "react/prop-types": "off" }
},
pluginReact.configs.flat.recommended,
]);
