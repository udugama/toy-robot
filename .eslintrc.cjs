module.exports = {
  extends: ['airbnb-base', 'prettier', 'plugin:jest/recommended'],
  rules: {
    "no-console": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js"] }]
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['import']
};