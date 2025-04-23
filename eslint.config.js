import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import prettierConfig from "eslint-config-prettier";

export default [
  // Configuração básica do ESLint
  js.configs.recommended,

  // Configuração do TypeScript
  ...tseslint.configs.recommended,

  // Configuração do React
  {
    files: ["**/*.{jsx,tsx}"],
    plugins: {
      react: reactPlugin
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off"
    }
  },

  // Configuração de ambiente
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },

  // Prettier (DEVE SER O ÚLTIMO)
  prettierConfig
];