/* eslint-env node */

/** @typedef { import("eslint").ESLint.Options } Options */

/** @type {Options} */
module.exports = {
  env: {
    browser: true,
  },
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'preact',
    'prettier',
  ],
};
