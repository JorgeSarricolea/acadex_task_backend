import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: {
      ecmaVersion: "latest", // Define la versión de ECMAScript
      sourceType: "module", // Usa módulos ES (import/export)
      globals: globals.browser, // Define variables globales del navegador
    },
    rules: {
      semi: ["error", "always"], // Enforce semicolons
      quotes: ["error", "double"], // Enforce double quotes
      "no-unused-vars": "warn", // Warning for unused variables
      eqeqeq: "error", // Enforce strict equality (===)
      "no-console": "warn", // Warning for console.log statements
    },
  },
  pluginJs.configs.recommended,
];
