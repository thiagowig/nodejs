
var schemaDAO = require('../dao/schemaDAO')
var schemaGenerator = require('../schemaGenerator')

module.exports = function (app) {

    app.get('/', function (req, res) {
        schemaDAO.listAll(fileDir, function (err, files) {
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
            })
        })
    })

    app.post('/validate', function (req, res) {
        var name = req.body.name.replace(' ', '_')
        var json = req.body.json

        schemaGenerator.validate(fileDir + name + '.json', json, function (err, result) {
            if (err) {
                res.send({
                    success: false,
                    message: JSON.stringify(err)
                })
            } else if (result.errors.length > 0) {
                res.send({
                    success: false,
                    message: result.errors
                })
            } else {
                res.send({
                    success: true,
                    message: 'JSON válido'
                })
            }
        })
    })

    
}