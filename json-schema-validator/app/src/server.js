


var fileUtil = require('./fileUtil')
var schemaGenerator = require('./schemaGenerator')

module.exports.init = function (dirname) {
    var express = require('express')
    var app = express()
    var bodyParser = require('body-parser');

    app.set('view engine', 'ejs')
    app.use(express.static(dirname + '/public'));
    app.use(bodyParser.json()); // support json encoded bodies
    app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

    app.get('/', function (req, res) {
        var filesDir = dirname + '/app/files/'

        fileUtil.listAll(filesDir, function (err, files) {
            var schemas = files.map(function (element) {
                var fileName = element
                fileName = fileName.replace('.json', '')
                var description = fileName.replace(/_/g, ' ')

                return {
                    description: description,
                    fileName: fileName
                }
            })

            res.render('pages/validate', {
                schemas: schemas
            });
        })
    })

    app.get('/schema/list', function (req, res) {
        var filesDir = dirname + '/app/files/'

        fileUtil.listAll(filesDir, function (err, files) {
            var schemas = files.map(function (element) {
                var fileName = element
                fileName = fileName.replace('.json', '')
                var description = fileName.replace(/_/g, ' ')

                return {
                    description: description,
                    fileName: fileName
                }
            })

            res.render('pages/schemaList', {
                schemas: schemas
            })
        })


    })

    app.get('/schema', function (req, res) {
        res.render('pages/schema', { name: null, schema: null })
    })

    app.get('/schema/:schemaName', function (req, res) {
        var schemaName = req.params.schemaName

        fileUtil.read(dirname + '/app/files/' + schemaName + '.json', function (err, content) {
            if (err) {
                res.send(JSON.stringify({ status: 503, message: 'Erro: ' + JSON.stringify(err) }));
            } else {
                var result = JSON.parse(content);

                res.render('pages/schema', {
                    name: schemaName.replace(/_/g, ' '),
                    schema: JSON.stringify(result, null, 4)
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
        var name = req.body.name.replace(/ /g, '_')
        var schema = req.body.schema

        fileUtil.save(dirname + '/app/files/' + name + '.json', schema, function (err, fileName) {
            if (err) {
                res.send({
                    success: false,
                    message: JSON.stringify(err)
                });
            } else {
                res.send({
                    success: true,
                    message: 'Sucesso ao salvar o arquivo'
                });
            }
        })
    })

    app.post('/schema/validate', function (req, res) {
        var name = req.body.name.replace(' ', '_')
        var json = req.body.json

        schemaGenerator.validate(dirname + '/app/files/' + name + '.json', json, function (err, result) {
            if (err) {
                res.send({
                    success: false,
                    message: JSON.stringify(err)
                });
            } else if (result.errors.length > 0) {
                res.send({
                    success: false,
                    message: result.errors
                });
            } else {
                res.send({
                    success: true,
                    result: 'JSON válido'
                });
            }
        })
    })

    app.post('/import', function (req, res) {
        var jsonExample = JSON.parse(req.body.jsonExample)

        schemaGenerator.define(jsonExample, function(err, schema) {
            if (err) {
                res.send({
                    success: false,
                    message: JSON.stringify(err)
                });
            } else {
                res.send({
                    success: true,
                    message: 'Sucesso ao importar o json',
                    schema: JSON.stringify(schema, null, 4)
                });
            }
        })
        
    });

    app.listen(8080)
    console.log('8080 is the magic port');
}

