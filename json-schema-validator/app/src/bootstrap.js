
module.exports.init = function () {
    var express = require('express')
    var app = express()
    var bodyParser = require('body-parser')
    var consign  = require('consign')
    var helmet = require('helmet')
    var compression = require('compression')
    var cors = require('cors')
    var http = require('http')

    app.set('view engine', 'ejs')
    app.set('views', viewsDir);
    app.use(express.static(staticDir));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(helmet())
    app.use(compression())
    app.use(cors())

    consign({verbose: false})
        .include('app/src/controller')
        .into(app)

    http.createServer(app).listen(8080)
    console.log('Server is up and running!!!');
}

