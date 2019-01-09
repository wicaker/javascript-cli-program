var program = require('commander');

var os = require( 'os' );

var networkInterfaces = os.networkInterfaces( );

program
  .command('ip')
  .action(()=>{
    console.log(networkInterfaces.wlp3s0[0].address);
  });

program.parse(process.argv);