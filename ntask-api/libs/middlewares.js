
var bodyParser = require('body-parser');
var express = require('express');
var cors = require('cors');
var morgan = require('morgan');
var logger = require('./logger');
var compression = require('compression');
var helmet = require('helmet');

module.exports = function(app) {

    app.set('port', 3000);
    app.set('json spaces', 4);
    app.use(morgan('common', {
        stream: {
            write: function(message) {
                logger.info(message);
            }
        }
    }));
    
    app.use(bodyParser.json());
    app.use(app.auth.initialize());
    app.use(express.static('public'));
    app.use(compression());
    app.use(helmet());
    
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