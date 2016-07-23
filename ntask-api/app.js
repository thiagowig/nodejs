
var app = require('express')();
var consign = require('consign');

consign().include('models')
         .then('libs/middlewares.js')
         .then('routes')
         .then('libs/boot.js')
         .into(app);



