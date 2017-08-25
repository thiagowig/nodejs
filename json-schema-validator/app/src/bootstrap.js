
module.exports.init = function () {
    var express = require('express')
    var app = express()
    var bodyParser = require('body-parser')
    var consign  = require('consign')

    app.set('view engine', 'ejs')
    app.set('views', viewsDir);
    app.use(express.static(staticDir));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    consign({verbose: false}).include('app/src/controller').into(app)

    app.listen(8080)
    console.log('8080 is the magic port');
}

