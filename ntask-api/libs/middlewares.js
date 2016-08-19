
var bodyParser = require('body-parser');
var express = require('express');
var cors = require('cors');

module.exports = function(app) {

    app.set('port', 3000);
    app.set('json spaces', 4);
    
    app.use(bodyParser.json());
    app.use(app.auth.initialize());
    app.use(express.static('public'));
    
    app.use(function(req, res, next) {
        if (req.body) {
            delete req.body.id;
        }
        next();   
    });

    app.use(cors({
        origin: ["http://localhost:300"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowHeaders: ["Content-Type", "Authorization"]
    }));
}