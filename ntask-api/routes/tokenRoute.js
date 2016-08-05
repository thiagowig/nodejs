
var jwt = require('jwt-simple');

module.exports = function(app) {
    var config = app.libs.config;
    var Users = app.db.models.Users;

    app.post('/token', function(req, res) {
        if (req.body.email && req.body.password) {
            var email = req.body.email;
            var password = req.body.password;

            Users.findOne({where: {email: email}})
                .then(function(user) {
                    if (Users.isPassword(user.password, password)) {
                        var payload = {id: user.id};
                        var token = jwt.encode(payload, config.jwtSecret);
                        res.json({token: 'JWT ' + token});
                    } else {
                        res.sendStatus(401);
                    }
                })
                .catch(function(error) {
                    res.sendStatus(401);
                });

        } else {
            res.sendStatus(401);
        }
    });
};