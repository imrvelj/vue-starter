const IS_PROD = process.env.NODE_ENV === 'production'

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    node: true,
    browser: true,
  },
  rules: {
    semi: ['warn', 'never'],
    quotes: [1, 'single', { allowTemplateLiterals: true }],
    strict: [2, 'never'],
    'no-console': 1,
    'no-debugger': IS_PROD ? 'error' : 'warn',
    'no-confusing-arrow': 'error',
    'arrow-spacing': 'warn',
    'no-unused-vars': 'off',
    'no-delete-var': 'error',
    'no-whitespace-before-property': 'warn',
    'arrow-parens': [1, 'as-needed'],
    '@typescript-eslint/camelcase': 1,
    'prettier/prettier': 1,
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/member-delimiter-style': [
      'warn',
      {
        multiline: {
          delimiter: 'none',
          requireLast: false,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
  },
}
