#!/usr/bin/env node

var program = require('commander');


const palindrome = input => {
  let re = /[\W_]/g;
  let lowRegStr = input.toLowerCase().replace(re, '');
  let reverseStr = lowRegStr.split('').reverse().join(''); 
  console.log(`String: ${input}`)
  console.log(reverseStr === lowRegStr ? 'YES':'NO')
}

program
  .command('palindrome <string>')
  .action((string)=>{
    palindrome(string);
  });

program.parse(process.argv);
 