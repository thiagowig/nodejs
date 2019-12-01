parserService = require('../service/parserService')

module.exports = function (app) {

    app.get('/', function (req, res) {
        res.render('index', {})
    })
    
    app.post('/parse', function (req, res) {
        result = parserService.parse(req.body)
        res.send(JSON.stringify(result, null, 4))
    })
}