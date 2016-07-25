
console.log('Initializing');
/*
var Crawler = require('crawler');
var url = require('url');

var c = new Crawler({
    maxConnections : 10,
    callback: function(error, result, $) {
        $('a').each(function(index, a) {
            var toQueueUrl = $(a).attr('href');
            c.queue(toQueueUrl);
        })

    }
});

c.queue('http://www.uol.com.br');
*/

var request = require("request");
var cheerio = require("cheerio");
var url = 'http://www.vivareal.com.br/venda/minas-gerais/belo-horizonte/bairros/sagrada-familia/apartamento_residencial/#{"precioInicial":"150000","precioFinal":"260000","areaDesde":null,"areaHasta":null,"habitacionesDesde":2,"habitacionesHasta":null,"banosDesde":1,"banosHasta":null,"garajesDesde":1,"garajesHasta":null,"locIds":["BR>Minas Gerais>NULL>Belo Horizonte>Barrios>Sagrada Familia"],"orderBy":null,"orderType":null,"usoProyecto":null,"estadoConstruccionProyecto":null}';
  
request(url, function (error, response, body) {
  if (!error) {
    var $ = cheerio.load(body);
    var articles = $('article');

    for(var i = 0; i < articles.length; i++) {
        console.log(articles[i]);
    }  
      
  } else {
    console.log("We’ve encountered an error: " + error);
  }
});