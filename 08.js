const program = require('commander');
const request = require('request');
const cheerio = require('cheerio');

program
  .command('headlines')
  .action(()=>{
    let url = 'https://www.kompas.com/';

    request(url, (err, res, html)=>{
      if(!err){
        let $ = cheerio.load(html);
        for(let i =0 ; i<$('.headline__big__link').length;i++){
          console.log('=============');
          console.log('Title : ' + $('.headline__big__title')[i].children[0].data);
          console.log('Url: '+ $('.headline__big__link')[i].attribs.href);
        }
        console.log('=============');
      }
    })
  });

program.parse(process.argv);