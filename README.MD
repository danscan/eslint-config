# danscan-eslint
Just my personal preferred eslint + prettier setup (for typescript + react projects).

## Installation
```
yarn add danscan-eslint @typescript-eslint/parser eslint prettier typescript --dev
touch .eslintrc.js
```

### .eslintrc.js
```javascript
// ...
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['danscan-eslint'],
}
```