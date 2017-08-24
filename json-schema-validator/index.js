global.staticDir = __dirname + '/app/static/'
global.fileDir = __dirname + '/app/files/'

var bootstrap = require('./app/src/bootstrap')

bootstrap.init()