

module.exports = function(app) {

    app.get('/', function(req, res) {
        res.json({status: 'NTask API'});
    }); 
    
}
