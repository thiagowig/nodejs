parserFormAnswerService = require('../service/parserFormAnswerService')
parserAnswerService = require('../service/parserAnswerService')

module.exports = function (app) {

    app.get('/', function (req, res) {
        res.render('index', {})
    })
    
    app.post('/parseFormAnswer', function (req, res) {
        result = parserFormAnswerService.parse(req.body)
        res.send(JSON.stringify(result, null, 4))
    })

    app.post('/parseAnswer', function (req, res) {
        result = parserAnswerService.parse(req.body)
        res.send(JSON.stringify(result, null, 4))
    })
}