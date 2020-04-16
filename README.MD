# eslint-config-danscan
My preferred eslint + prettier setup for react and non-react projects.

## Installation
```
yarn add danscan-eslint @typescript-eslint/parser eslint prettier typescript --dev
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