
var fs = require('fs')

module.exports.findByName = function (schemaName, callback) {
    fs.readFile(schemaName, 'utf-8', function (err, content) {
        if (err) {
            callback(err)
        } else {
            callback(null, content)
        }
    })
}

module.exports.save = function (schemaName, schemaContent, callback) {
    fs.writeFile(schemaName, schemaContent, 'utf-8', function (err) {
        if (err) {
            callback(err)
        } else {
            callback()
        }
    })
}

module.exports.listAll = function (dir, callback) {
    fs.readdir(dir, function (err, files) {
        if (err) {
            callback(err)
        } else {
            callback(null, files)
        }
    })
}

module.exports.remove = function (file, callback) {
    fs.unlink(file, function (err) {
        callback(err)
    })
}
