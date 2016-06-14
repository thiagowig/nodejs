var http = require('http');
var url = require('url');

http.createServer(function(client_req, client_res) {

  if (client_req.url.indexOf('http') > -1) {
    console.log('Doing some king of magic for the URL: ' + client_req.url);

    var query = url.parse(client_req.url, true).query;
    var newURL = url.parse(query.url, true);

    var proxy = http.request(query.url, function (res) {
      res.pipe(client_res, {
        end: true
      });
    });

    proxy.on("error", function(err) {
      console.log("Error on proxy");
      console.log(err);
    });

    var pipe = client_req.pipe(proxy, {
      end: true
    });

    pipe.on("error", function(err) {
      console.log("Error on wth");
      console.log(err);
    });
  }

}).listen(8091);
