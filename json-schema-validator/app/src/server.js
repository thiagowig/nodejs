
var fileUtil = require('./fileUtil')

module.exports.init = function (dirname) {
    var express = require('express')
    var app = express()
    var bodyParser = require('body-parser');

    app.set('view engine', 'ejs')
    app.use(express.static(dirname + '/public'));
    app.use(bodyParser.json()); // support json encoded bodies
    app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

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

    app.get('/schema/list', function (req, res) {
        var filesDir = dirname + '/app/files/'

        fileUtil.listAll(filesDir, function (err, files) {
            var schemas = files.map(function(element) {
                var description = element 
                description = description.replace('.json', '')
                description = description.replace(/_/g, ' ')

                return {
                    description: description,
                    fileName: element
                }
            })

            res.render('pages/schemaList', {
                schemas: schemas
            })
        })


    })

    app.get('/schema', function (req, res) {
        res.render('pages/schema', { name: "", schema: "" })
    })

    app.get('/schema/:schemaName', function (req, res) {
        fileUtil.read(dirname + '/app/files/' + req.params.schemaName + '.json', function (err, content) {
            if (err) {
                res.send(JSON.stringify({ status: 503, message: 'Erro: ' + JSON.stringify(err) }));
            } else {
                var result = JSON.parse(content);

                res.render('pages/schema', {
                    name: result.name,
                    schema: JSON.stringify(result.schema, null, 4)
                })
            }


        })


    })

    app.get('/file/:fileName', function (req, res) {
        fileUtil.read(dirname + '/app/files/' + req.params.fileName + '.json', function (err, content) {
            if (err) {
                res.send(JSON.stringify({ status: 503, message: 'Erro: ' + JSON.stringify(err) }));
            } else {
                res.send(JSON.stringify(content));
            }
        })
    })

    app.post('/schema/save', function (req, res) {
        var name = req.body.name.replace(' ', '_')
        var schema = req.body.schema

        fileUtil.save(dirname + '/app/files/' + name + '.json', schema, function (err, fileName) {
            if (err) {
                res.send({
                    success: false,
                    message: err
                });
            } else {
                res.send({
                    success: true,
                    message: 'Sucesso ao salvar o arquivo'
                });
            }
        })
    })

    app.listen(8080)
    console.log('8080 is the magic port');
}

