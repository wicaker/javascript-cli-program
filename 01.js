var program = require('commander');
 
const lowercase = input => console.log(input.toLowerCase());
const uppercase = input => console.log(input.toUpperCase());
const capitalize = input => {
  input = input.toLowerCase().split(" ");
  for (var i = 0, x = input.length; i < x; i++) {
      input[i] = input[i][0].toUpperCase() + input[i].substr(1);
  }
  console.log(input.join(" "));
};

program
  .command('lowercase <string>')
  .alias('l')
  .description('change to lowercase')
  .action((string)=>{
    lowercase(string);
  });

program
  .command('uppercase <string>')
  .alias('u')
  .description('change to uppercase')
  .action((string)=>{
    uppercase(string);
  });

program
  .command('capitalize <string>')
  .alias('c')
  .description('change to uppercase')
  .action((string)=>{
    capitalize(string);
  });
 
program.parse(process.argv);
 