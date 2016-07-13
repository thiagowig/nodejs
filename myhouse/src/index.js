
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

var request = require("request"),
  cheerio = require("cheerio"),
  url = "http://www.uol.com.br";
  
request(url, function (error, response, body) {
  if (!error) {
    var $ = cheerio.load(body);
    var links = $("a");

    console.log('Size: ' + links.length);

    for (var index = 0; index < links.length; index++) {
        var element = links[index];
        //console.log(element.attribs.href);
    }
      
  } else {
    console.log("We’ve encountered an error: " + error);
  }
});