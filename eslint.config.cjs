const eslintPluginReact = require('eslint-plugin-react');
const eslintPluginReactHooks = require('eslint-plugin-react-hooks');
const js = require('@eslint/js');
const tseslint = require('@typescript-eslint/eslint-plugin');
const tsparser = require('@typescript-eslint/parser');
const prettier = require('eslint-config-prettier');

module.exports = [
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
       import: require('eslint-plugin-import'),
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...eslintPluginReact.configs.recommended.rules,
      ...eslintPluginReactHooks.configs.recommended.rules,
      'no-unused-vars': 'off',
      'import/no-nodejs-modules': 'warn',
      "@typescript-eslint/no-unused-vars": "off",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "no-prototype-builtins": "off",
      "no-undef": "warn",
    },
  },
  prettier,
];
