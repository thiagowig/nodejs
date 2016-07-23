

var express = require('express');
var PORT = 3000;
var app = express();
var consign = require('consign');

app.set('json spacess', 4);

consign().include('models').then('routes').into(app);

app.listen(PORT, function() {console.log('NTask API is running')});
