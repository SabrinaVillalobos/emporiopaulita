const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const urls1 = ['881098015/Chaleco/881098017', '881099419/Chaleco/881099420', '5943531/Sweater/5943540', '881012064/Sweaters/881012065', '881009229/Sweater/881009232'];
const urls2 = ['6130890/Polera-Cavity/6130897', '5902155/Camisa-Fluida/5902157', '5524421/Polera-Mujer-Wms-Evelyn.S18/5524428', '881101143/Sweaters/881101144', '881018263/Sweater/881018264', '881018289/Sweaters/881018290', '6151847/Poleron-Center/6151848','6230121/Vestido/6230129', '5975872/Vestido/5975887', 'Vestido-Floral-Cuadros/5944905', '881098328/Vestido/881098329', '6153263/Vestido-Estampado/6153264','5975644/Vestido/5975652','5962152/Vestido/5962157','5902754/Vestido-Bordada-Espejos/5902755','5902392/Vestido-Guipur-Manga-Acampanada/5902394','5944895/Vestido-Cremallera/5944901','881105687/Falda/881105688','product/6088322/Falda/6088326','6009912/Falda-Floreada/6009915','6092994/Falda-Botones-Contraste/6092995']
const urls = urls1.concat(urls2);

const getData = urls => {
  let promises = urls.map((singleUrl) => {
    let url = `https://www.falabella.com/falabella-cl/product/${singleUrl}`;
    let promise = new Promise((resolve, reject) => {
      request(url, function(error, response, body) {
        if (error) {
          console.log('Error: ' + error);
          reject(error);
        }
        console.log('Status code: ' + response.statusCode);
        const $ = cheerio.load(body);
        let obj = {
          title: ''
        };
        obj.title = $('.fb-product-cta__title').eq(0).text();
        obj.brand = $('.fb-product-cta__brand.fb-stylised-caps').eq(0).text();
        obj.img = `https:${$('#js-fb-pp-photo__media').eq(0).attr('src')}`;
        let infoTable = $('.fb-product-information__specification').text().trim().toLowerCase();
        if (infoTable.includes('ni�o') || infoTable.includes('ni�a')) {
          obj.category = 'Vestuario Infantil';
          obj.price = Math.floor((Math.random() * 25000) + 5000);
        } else if (infoTable.includes('mujer')) {
          obj.category = 'Vestuario Femenino';
          obj.price = Math.floor((Math.random() * 25000) + 5000);
        } else {
          obj.category = 'Electrónica';
          obj.price = Math.floor((Math.random() * 1500000) + 250000);
        }
        resolve(obj);
      });
    });
    return promise;
  });

  Promise.all(promises).then((results) => {
    console.log("Results > "+JSON.stringify(results, null, 2));
    fs.writeFileSync(`dev/scraper/data.json`, JSON.stringify(results, null, 2));
  }).catch((error) => {
    console.log('error > ' + error);
  });
};

getData(urls);