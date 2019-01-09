var program = require('commander');

var os = require( 'os' );

var networkInterfaces = os.networkInterfaces( );

program
  .command('ip-external')
  .action(()=>{
    console.log(networkInterfaces.lo[0].address);
  });

program.parse(process.argv);