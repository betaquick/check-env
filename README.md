# check-env
a module to assert enviornmental variables are set

## Installation 
```sh
npm i @betaquick/check-env
```
## Usage

### Javascript

```javascript
require('dotenv').config();
const cowsay = require('cowsay');
const checkEnv = require('@betaquick/check-env');

try {
  checkVariables(process.argv.slice(2));
} catch (err) {
  console.error(cowsay.say({
    text: err.message
  }));

  process.exit(1);
}
```

## Test 

```sh
npm run test
```
