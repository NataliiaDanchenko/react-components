import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      js,
      prettier: pluginPrettier,
    },
    extends: [
      js.configs.recommended,
      configPrettier, 
    ],
    rules: {
      "prettier/prettier": [
        "error",
        {
          singleQuote: true,
          semi: true,
          trailingComma: "es5",
          printWidth: 80,
          tabWidth: 2,
          endOfLine: "auto",
        },
      ],
    },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
]);

