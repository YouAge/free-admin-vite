
module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "node": true,
    "es2021": true
  },
  "extends": [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  "parserOptions": {"ecmaVersion":2021}


}