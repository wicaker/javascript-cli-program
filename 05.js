var program = require('commander');


const random = (input) => {
  var str = "";
  if(input==''){
    for ( ; str.length < 32; str += Math.random().toString( 36 ).substr( 2 ) );
    return console.log(str.substr( 0, 32 ));
  }
  else{
    console.log(input[1]);
  }
}

program
  .command('random')
  .option('--length <n>')
  .action((string, options)=>{
    console.log(options.length)
    // random(string,length);
  });

program.parse(process.argv);