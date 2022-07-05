module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@babel/eslint-parser',
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
  ],
}
