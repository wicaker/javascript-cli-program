var program = require('commander');


const obfuscate = input => {
  input= input.split('');
  for(let i=0; i<input.length; i++){
    let j=input[i];
    input.splice(i,1,'&#'+j.charCodeAt()+';')
  }
  console.log(input.join(''));
}

program
  .command('obfuscate <string>')
  .action((string)=>{
    obfuscate(string);
  });

program.parse(process.argv);