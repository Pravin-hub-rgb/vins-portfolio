import js from '@eslint/js';
import { nextEslintPlugin } from '@next/eslint-plugin';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    plugins: {
      'next': nextEslintPlugin
    },
    rules: {
      ...nextEslintPlugin.configs['core-web-vitals'].rules
    }
  }
];