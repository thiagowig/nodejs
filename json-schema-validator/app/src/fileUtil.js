
var fs = require('fs')

module.exports.read = function (fileName, callback) {
    fs.readFile(fileName, 'utf-8', function(err, content) {
        if (err) {
            callback(err)
        } else {
            callback(null, content);
        }
    })
}