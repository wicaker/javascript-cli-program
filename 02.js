#!/usr/bin/env node

var program = require('commander');

const add = input => {
  console.log(
    input.reduce((a, b) => parseInt(a) + parseInt(b), 0)
  )
}

const subtract= input=> {
  for(let i=0; i<input.length-1;i++){
    input[0] = parseInt(input[0])-parseInt(input[i+1]);
  }
  console.log(input[0]);
}

const multiply = input => {
  console.log(
    input.reduce((a, b) => parseInt(a) * parseInt(b), 1)
  )
}

const divide = input => {
  for(let i=0; i<input.length-1;i++){
    input[0] = parseInt(input[0])/parseInt(input[i+1]);
  }
  console.log(input[0]);
}

program
  .command('add <number...>')
  .action((number)=>{
    add(number);
  });

program
  .command('subtract <number...>')
  .action((number)=>{
    subtract(number);
  });

program
  .command('multiply <number...>')
  .action((number)=>{
    multiply(number);
  });

program
  .command('divide <number...>')
  .action((number)=>{
    divide(number);
  });

program.parse(process.argv);
 