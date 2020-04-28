# @danscan/eslint-config
My preferred eslint + prettier setup.

* * *

# Typescript

## Installation
```
yarn add @danscan/eslint-config @typescript-eslint/parser eslint prettier typescript --dev
touch .eslintrc.js
```

### `.eslintrc.js`
```javascript
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['@danscan'],
}
```
* * *

# Javascript

## Installation
```
yarn add eslint-config-danscan eslint prettier --dev
touch .eslintrc.js
```

### `.eslintrc.js`
```javascript
module.exports = {
  extends: ['@danscan/js'],
}
```