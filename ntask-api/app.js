
var app = require('express')();
var consign = require('consign');

consign().include('libs/config.js')
         .then('db.js')
         .then('auth.js')
         .then('libs/middlewares.js')
         .then('routes')
         .then('libs/boot.js')
         .into(app);



