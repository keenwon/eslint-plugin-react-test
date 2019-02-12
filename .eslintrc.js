module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: "module"
  },

  env: {
    es6: true,
    node: true,
    browser: true
  },

  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ]
}
