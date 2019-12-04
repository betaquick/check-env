'use strict';

require('dotenv').config();
const cowsay = require('cowsay');

function checkVariables(variables) {
  const missing = [];

  variables.forEach(variable => {
    if (typeof process.env[variable] === 'undefined') {
      missing.push(variable);
    }
  });


  if (missing.length) {
    if (missing.length === 1) {
      throw new Error(`Missing environment variable ${missing[0]}`);
    }
    throw new Error(`Missing environment variables ${missing.join(', ')}`);
  }
}

module.exports = checkVariables;
