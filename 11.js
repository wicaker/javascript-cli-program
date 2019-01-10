const program = require('commander');
const webshot = require('webshot');
const fs = require('fs')

const screenshot = (toFormat, fromWeb) => {
  let fileUrl = fs.readFileSync(fromWeb,'utf8').split('\n');
  for(i of fileUrl){
    let format=`${i.replace(/^[https:/]+/i,'').replace(/[./]/g,'-')}.${toFormat}`;
    webshot(`${i}`, format, function(err) {
      if(err){
        return console.log(err);
      }
      console.log('Image Screenshot Succesfully');
    }); 
  }
}

program
  .command('screenshot 11-list.txt')
  .option('--format')
  .action((to, webSiteFrom)=>{
    screenshot(to, webSiteFrom);
  });

program.parse(process.argv);