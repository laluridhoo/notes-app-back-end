import globals from 'globals';
import pluginJs from '@eslint/js';
import daStyle from 'eslint-config-dicodingacademy';

/** @type {import('eslint').Linter.Config} */
export default {
  extends: [
    'eslint:recommended',
    'plugin:@eslint/js/recommended',
    daStyle,
  ],
  overrides: [
    {
      files: ['**/*.js'],
      languageOptions: {
        sourceType: 'commonjs',
        globals: {
          ...globals.browser,
          ...globals.node,
        },
      },
    },
  ],
  rules: {
    'linebreak-style': 'off', // Menonaktifkan aturan 'linebreak-style'
  },
};
