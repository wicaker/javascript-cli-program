#!/usr/bin/env node
 
/**
 * Module dependencies.
 */
 
var program = require('commander');

const obfuscate = input => {
  return input;
}

program
  .option('random --[...]')
  .parse(process.argv);

if (program.random) console.log(obfuscate('peppers'));
if (program.pineapple) console.log(obfuscate('pineapple'));
