

module.exports = function(app) {

    var Task = app.models.taskModel;

    app.get('/task', function(req, res) {
        Task.findAll(null, function(tasks) {
            res.json({"tasks": tasks});
        });            
    });
}
