#!/usr/bin/env node

const path = require('path')
const generator = require('./')

const input = process.argv[process.argv.indexOf('--input') + 1]
const output = process.argv[process.argv.indexOf('--output') + 1]

generator({
  ...require(path.resolve(input)),
  path: path.resolve(output),
})
