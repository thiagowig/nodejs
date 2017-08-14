
var fileUtil = require('./fileUtil')

module.exports.init = function (dirname) {
    var express = require('express')
    var app = express()

    app.set('view engine', 'ejs')
    app.use(express.static(dirname + '/public'));

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

    app.get('/schema', function (req, res) {
        res.render('pages/schema', {
            schemas: [
                { description: 'faturas', fileName: '123' },
                { description: 'historicoAutorizacoes', fileName: '321' }
            ]
        })
    })

    app.get('/schema/:fileName', function (req, res) {
        fileUtil.read(dirname + '/app/files/' + req.params.fileName + '.json', function(err, content) {
            if (err) {
                res.send(JSON.stringify({ status:503, message: 'Erro: ' + JSON.stringify(err) }));
            } else {
                res.send(JSON.stringify(content));
            }

            
        })

        
    })
/*
    app.get('/schema/:schemaId', function (req, res) {
        fileUtil.read(req.params.schemaId, function(err, content) {
            res.render('pages/schema', {});
        })        
    })*/

    app.listen(8080)
    console.log('8080 is the magic port');
}

