"use strict";

module.exports = {
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
  ],
  plugins: ['react-hooks'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
  rules: {
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'max-len': 0,
    'no-nested-ternary': 0,
    'no-use-before-define': 0,
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-curly-newline': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 'warn',
    'react/no-unescaped-entities': 0,
    'react/prop-types': [1, { skipUndeclared: true }],
    'spaced-comment': 0,

    // Prettier
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        semi: true,
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
  },
  env: {
    browser: true,
    node: true,
  },
};
