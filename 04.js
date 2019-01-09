var program = require('commander');


const obfuscate = input => {
  console.log(input);
}

program
  .command('obfuscate <string>')
  .action((string)=>{
    obfuscate(string);
  });

program.parse(process.argv);