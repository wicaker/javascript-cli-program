const program = require('commander');
const webshot = require('webshot');
const fs = require('fs')

const pad = (number, length)=>{  
  var str = '' + number;
  while (str.length < length) {
      str = '0' + str;
  }
  return str;
}

const screenshot = (toFormat, fromWeb) => {
  let url = fromWeb.parent.rawArgs[3];
  let format='';
  for(let i=1 ;i<=Infinity ;i++){
    format = `screenshot-${pad(i, 3)}.${toFormat}`;
    try {
      if (fs.existsSync(format)) {
        format = `screenshot-${pad(i+1, 3)}.${toFormat}`;
      }
      else{
        break;
      }
    } catch(err) {
      console.error(err)
    }
  }
  

  webshot(url, format, function(err) {
    if(err){
      return console.log(err);
    }
    console.log('Image Screenshot Succesfully');
  });
}

program
  .command('screenshot <webSiteFrom>')
  .option('--format')
  .option('--output')
  .action((to, webSiteFrom)=>{
    screenshot(to, webSiteFrom);
  });

program.parse(process.argv);