
module.exports.init = function () {
    var express = require('express')
    var app = express()

    app.set('view engine', 'ejs')

    app.get('/', function (req, res) {
        var drinks = [
            { name: 'Bloody Mary', drunkness: 3 },
            { name: 'Martini', drunkness: 5 },
            { name: 'Scotch', drunkness: 10 }
        ];
        var tagline = "TESTE";

        res.render('pages/index', {
            drinks: drinks,
            tagline: tagline
        });
    })

    app.get('/about', function (req, res) {
        res.render('pages/about')
    })

    app.listen(8080)
    console.log('8080 is the magic port');
}

