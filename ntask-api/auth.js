
var passport = require('passport');
var Strategy = require('passport-jwt');

module.exports = function(app) {
  const User = app.db.models.User;
  const config = app.libs.config;
  const strategy = new Strategy({secretOrKey: config.jwtSecret}, function(payload, done) {
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
    initialize = function() {
      passport.initialize();
    },
    authenticate = function() {
      return passport.authenticate('jwt', config.jwtSession);
    }
  }
}