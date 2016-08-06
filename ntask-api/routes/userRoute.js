

module.exports = function(app) {

    var User = app.db.models.Users;

    app.route('/user/')

        .get(function(req, res) {
            User.findAll()
                .then(function(result) {
                    res.json(result);
                })
                .catch(function(error) {
                    res.status(412).json({"message": error.message});
                });                        
        })

        .post(function(req, res) {
            User.create(req.body)
                .then(function(result) {
                    res.json(result);
                })      
                .catch(function(error) {
                    res.status(412).json({"message": error.message});
                });
        });
        
    app.route('/user/:id')
        .all(function() {
            app.auth.authenticate();
        })

        .get(function(req, res) {
            User.findById(req.params.id, {attributes: ["id", "name", "email"]})
                .then(function(result) {
                    res.json(result);
                })
                .catch(function(error) {
                    res.status(412).json({"message": error.message});
                });                        
        })

        .delete(function(req, res) {
            User.destroy({"where": req.params})
                .then(function(result) {
                    res.sendStatus(204);
                })                
                .catch(function(error) {
                    res.status(412).json({"message": error.message});
                });      
        });
}
