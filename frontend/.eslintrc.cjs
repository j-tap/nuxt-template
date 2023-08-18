/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'vue/no-v-html': 'off',
    'vue/html-indent': [
      1, 4, {
        'ignores': [],
      },
    ],
    'vue/multi-word-component-names': 'off',
    'indent': [
      1, 4, {
        'SwitchCase': 1,
      },
    ],
    'vue/new-line-between-multi-line-property': [
      1, {
        'minLineOfMultilineProperty': 2,
      },
    ],
    'no-multiple-empty-lines': [1, { max: 1 }],
    'no-trailing-spaces': [1],
    'quotes': [1, 'single'],
    'semi': [1, 'never'],
    'comma-dangle': [1, 'always-multiline'],
    'no-console': process.env.NODE_ENV === 'production' ? 1 : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 1 : 0,
    'space-before-function-paren': [1, 'always'],
    'object-curly-spacing': [1, 'always'],
    'array-bracket-newline': [1, { 'multiline': true }],
    'function-paren-newline': [1, 'multiline'],
    'brace-style': [1, 'stroustrup'],
    'eol-last': [1, 'always'],
    'padding-line-between-statements': [
      1,
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['return', 'expression'] },
      { blankLine: 'always', prev: ['if'], next: ['*'] },
    ],
  },
}
