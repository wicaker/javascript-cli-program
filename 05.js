var program = require('commander');


//this function to random input according length of input and by default 32
const randomInput=(...input)=>{
  let str = "";
  if( input.length==1){
    for ( ; str.length < 32; str += Math.random().toString( 36 ).substr( 2 ) );
    return str.substr( 0, 32 );
  } 
  else{
    for ( ; str.length < input[1]; str += Math.random().toString( 36 ).substr( 2 ) );
    return str.substr( 0, input[1] );
  }
}

//this function will return result
const random = (...input) => {
  var str = "";
  if(Object.keys(input[0]).length<11 && input[1]== undefined){
    console.log(randomInput('a'));
  }
  else{
    let result = '';
    if(input[0].hasOwnProperty('length')){
      result = randomInput('a',input[0].length);
    }
    else{
      result = randomInput('a');
    }
    if(input[0].hasOwnProperty('letters')){
      if(input[0].letters==='false'){
        result = result.replace(/[a-z]/g,parseInt(Math.random()*10))
      }
    }
    if(input[0].hasOwnProperty('numbers')){
      if(input[0].numbers==='false'){
        result = result.replace(/[0-9]/g,'a')
      }
    }
    if(input[0].hasOwnProperty('uppercase')){
      result = result.toUpperCase();
    }
    if(input[0].hasOwnProperty('lowercase')){
      result = result.toLowerCase();
    }
    console.log(result);
  }
}

program
  .command('random --length')
  .option('--length [..value]')
  .option('--letters [..value]')
  .option('--numbers [..value]')
  .option('--uppercase')
  .option('--lowercase')
  .action((...a)=>{
    random(...a);
  });

program.parse(process.argv);