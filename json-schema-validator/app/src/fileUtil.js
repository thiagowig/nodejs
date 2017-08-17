
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

module.exports.save = function (name, schema, callback) {
    fs.writeFile(name, schema, 'utf-8', function (err) {
        if (err) {
            callback(err)
        } else {
            callback()
        }
    });
}

module.exports.listAll = function (dir, callback) {
    fs.readdir(dir, function (err, files) {
        if (err) {
            callback(err)
        } else {
            callback(null, files)
        }
    });
}