
var fileUtil = require('../fileUtil')
var schemaGenerator = require('../schemaGenerator')

module.exports = function (app) {
    app.get('/schema/list', function (req, res) {

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

        fileUtil.read(fileDir + schemaName + '.json', function (err, content) {
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

    app.post('/schema/save', function (req, res) {
        var name = req.body.name.replace(/ /g, '_')
        var schema = req.body.schema

        fileUtil.save(fileDir + name + '.json', schema, function (err, fileName) {
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
}