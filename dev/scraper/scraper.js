const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const urls1 = ['880962696/Sandalia-Mujer-Daisy/880962697', '880890853/Botin-Mujer-Aluna/880890859', '6185659/Zapatilla-Urbana-Mujer-Goodone5-Apur/6185671', '5485506/Botin-Mujer-6FB0517/5485510'];
const urls2 = ['6134358/Zapato-Mujer-Ally-A950/6134360'];
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
        } else if (infoTable.includes('Zapatos de mujer')) {
          obj.category = 'Calzado Femenino';
          obj.price = Math.floor((Math.random() * 75000) + 15000);
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