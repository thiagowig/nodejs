
var fileUtil = require('./fileUtil')
var schemaGenerator = require('./schemaGenerator')

module.exports.init = function () {
    var express = require('express')
    var app = express()
    var bodyParser = require('body-parser')
    var consign  = require('consign')

    app.set('view engine', 'ejs')
    app.use(express.static(staticDir));
    app.use(bodyParser.json()); // support json encoded bodies
    app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

    consign().include('app/src/controller').into(app)

    app.get('/', function (req, res) {
        fileUtil.listAll(fileDir, function (err, files) {
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

    app.get('/file/:fileName', function (req, res) {
        fileUtil.read(fileDir + req.params.fileName + '.json', function (err, content) {
            if (err) {
                res.send(JSON.stringify({ status: 503, message: 'Erro: ' + JSON.stringify(err) }));
            } else {
                res.send(JSON.stringify(content));
            }
        })
    })

    app.post('/schema/validate', function (req, res) {
        var name = req.body.name.replace(' ', '_')
        var json = req.body.json

        schemaGenerator.validate(fileDir + name + '.json', json, function (err, result) {
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
                    message: 'JSON válido'
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

