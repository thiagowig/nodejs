global.staticDir = __dirname + '/app/static/'
global.fileDir = __dirname + '/app/files/'
global.viewsDir = __dirname + '/app/views/'

var bootstrap = require('./app/src/bootstrap')

bootstrap.init()