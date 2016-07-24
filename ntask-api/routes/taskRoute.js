

module.exports = function(app) {

    var Task = app.db.models.Tasks;

    app.route('/task')    

        .get(function(req, res) {
            Task.findAll()
                .then(function(result) {
                    res.json(result);
                })
                .catch(function(error) {
                    res.status(412).json({"message": error.message});
                });                        
        })

        .post(function(req, res) {
            Task.create(req.body)
                .then(function(result) {
                    res.json(result);
                })      
                .catch(function(error) {
                    res.status(412).json({"message": error.message});
                });
        });
        
    app.route('/task/:id')

        .get(function(req, res) {
            Task.findOne({"where": req.params})
                .then(function(result) {
                    res.json(result);
                })
                .catch(function(error) {
                    res.sendStatus(404);
                });                        
        })

        .put(function(req, res) {
            Task.update(req.body, {"where": req.params})
                .then(function(result) {
                    res.sendStatus(204);
                })                
                .catch(function(error) {
                    res.status(412).json({"message": error.message});
                });
        })

        .delete(function(req, res) {
            Task.destroy({"where": req.params})
                .then(function(result) {
                    res.sendStatus(204);
                })                
                .catch(function(error) {
                    res.status(412).json({"message": error.message});
                });      
        });
}
