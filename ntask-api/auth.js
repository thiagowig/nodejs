
var passport = require('passport');
var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;

module.exports = function(app) {
  var User = app.db.models.User;
  var config = app.libs.config;

  var opts = {
    secretOrKey: config.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeader()
  };
  
  var strategy = new JwtStrategy(opts, function(payload, done) {
    User.findById(payload.id)
      .then(function(user) {
        if (user) {
          return done(null, {id: user.id, email: user.email});
        }
        return done(null, false);
      })
      .catch(function(error) {
        done(error, null);
      });
  });

  passport.use(strategy);

  return {
    initialize: function() {
      return passport.initialize();
    },
    authenticate: function() {
      return passport.authenticate('jwt', function(req, res, next) {
        console.log('Test');
      });
    }
  }
}