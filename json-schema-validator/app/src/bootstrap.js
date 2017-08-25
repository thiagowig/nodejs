
var fileUtil = require('./fileUtil')
var schemaGenerator = require('./schemaGenerator')

module.exports.init = function () {
    var express = require('express')
    var app = express()
    var bodyParser = require('body-parser')
    var consign  = require('consign')

    app.set('view engine', 'ejs')
    app.set('views', viewsDir);
    app.use(express.static(staticDir));
    app.use(bodyParser.json()); // support json encoded bodies
    app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

    consign().include('app/src/controller').into(app)

    app.listen(8080)
    console.log('8080 is the magic port');
}

