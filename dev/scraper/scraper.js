const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const urls1 = ['881031058/Polera-Manga-Larga-Nino/881031062', '5074630/Notebook-Gamer-Intel-Core-i7-16GB-RAM-1TB-DD-+-256GB-SSD-17,3-/5074630', '881098015/Chaleco/881098017', '881009229/Sweater/881009232'];
const urls2 = ['881027863/Polera-Manga-Larga-Nino-Qd974O/881027864', '881023366/Jeans-con-Suspensores/881023368', '881099419/Chaleco/881099420', '5943531/Sweater/5943540', '881012064/Sweaters/881012065'];
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
        } else if (infoTable.includes('mujer')) {
          obj.category = 'Vestuario Femenino';
        } else {
          obj.category = 'Electrónica';
        }
        resolve(obj);
      });
    });
    return promise;
  });

  Promise.all(promises).then((results) => {
    console.log("Results > "+JSON.stringify(results, null, 2));
    fs.writeFileSync(`data.json`, JSON.stringify(results, null, 2));
  }).catch((error) => {
    console.log('error > ' + error);
  });
};

getData(urls);