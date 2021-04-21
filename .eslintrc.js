module.exports = {
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
  env: {
    node: true,
    browser: true,
    commonjs: true,
    amd: true,
  },
  parserOptions: {
    ecmaVersion: 8, // or 2017
  },
  extends: 'eslint:recommended',
  globals: {
    expect: true,
    test: true,
  },
}
