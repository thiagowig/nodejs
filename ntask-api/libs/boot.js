var fs = require('fs');
var https = require('https');

var credentials = {
    key: fs.readFileSync('ntask.key', 'utf8'),
    cert: fs.readFileSync('ntask.cert', 'utf8')
};

module.exports = function(app) {

    if (process.env.NODE_ENV !== 'tst') {

        app.db.sequelize.sync().done(function() {

            https.createServer(credentials, app)
                 .listen(app.get('port'), function() {
                console.log('NTask API is running')
            });

        });

    }

}