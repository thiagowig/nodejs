var express = require('express');
var app = express();
//var bodyParser = require('body-parser');

//app.use(bodyParser.urlencoded({extended : true}));
//app.use(bodyParser.json());

var port = process.env.PORT || 8090;

var router = express.Router();

router.use(function(req, resp, next) {
  console.log("The url was invoked: " + req.url);
  next();
});

router.get('/product', function(req, resp) {
  resp.json({"id" : "123", "description" : "Moto X Play"});
});


router.post('/product/create', function(req, resp) {
  console.log('Creating a product');
  //console.log('With id' + req.body.id);
  console.log(req);

  resp.json({message : "The product was created"});
});

app.use('/api', router);

app.listen(port);

console.log('Listen on port ' + port)
