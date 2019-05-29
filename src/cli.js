#!/usr/bin/env node

const path = require('path');
const generate = require('./');

const input = process.argv[process.argv.indexOf('--input') + 1];
const output = process.argv[process.argv.indexOf('--output') + 1];

generate({
  ...require(path.resolve(input)),
  output: path.resolve(output),
});
