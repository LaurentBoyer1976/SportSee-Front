import { ESLint } from "eslint";
import reactPlugin from "eslint-plugin-react";

export default [
  {
    ignores: ["node_modules/**"], // Ignore les fichiers dans node_modules
  },
  {
    files: ["src/**/*.jsx"], // Cible les fichiers JSX dans src
    languageOptions: {
      ecmaVersion: "latest", // Utilise la dernière version d'ECMAScript
      sourceType: "module", // Active les modules ES
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Active JSX
        },
      },
    },
    plugins: {
      react: reactPlugin,
    },
    rules: {
      "react/prop-types": "warn",
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": "warn",
      "no-console": "warn",
      "eqeqeq": "error",
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      "indent": ["error", 2],
      "react/jsx-uses-vars": "error",
    },
    settings: {
      react: {
        version: "detect", // Détecte automatiquement la version de React
      },
    },
  },
];