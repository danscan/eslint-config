# eslint-config-danscan
My preferred eslint + prettier setup.

## Installation
```
yarn add eslint-config-danscan @typescript-eslint/parser eslint prettier typescript --dev
touch .eslintrc.js
```

* * *

# Typescript

## Typescript + Prettier Config
```javascript
// ...
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['danscan'],
}
```
* * *

# Javascript

## Javacript + Pretter Config
```javascript
// ...
module.exports = {
  extends: ['danscan/js'],
}
```