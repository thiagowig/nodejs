

module.exports = function(app) {

    app.set('port', 3000);
    app.set('json spaces', 4);
    
    app.use(function(req, res, next) {
        if (req.body) {
            delete req.body.id;
        }
        next();   
    });
}