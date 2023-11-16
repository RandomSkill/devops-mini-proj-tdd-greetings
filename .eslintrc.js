module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 0,
    'no-use-before-define': ['error', 'nofunc'],
  },
  ignorePatterns: ['**/node_modules/*', '**/Visualiser/ASM/*', '**/public/*'],
};
