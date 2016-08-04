

module.exports = function(app) {

    if (process.env.NODE_ENV !== 'tst') {
        app.db.sequelize.sync().done(function() {
            app.listen(app.get('port'), function() {
                console.log('NTask API is running')
            });
        });
    }

}