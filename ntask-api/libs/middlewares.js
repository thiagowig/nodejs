
var bodyParser = require('body-parser');
var express = require('express');

module.exports = function(app) {

    app.set('port', 3000);
    app.set('json spaces', 4);

    app.use(bodyParser.json());
    app.use(app.auth.initialize());
    
    app.use(function(req, res, next) {
        if (req.body) {
            delete req.body.id;
        }
        next();   
    });

    app.use(express.static('public'));
}