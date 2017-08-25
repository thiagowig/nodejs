
var schemaDAO = require('./dao/schemaDAO')

module.exports.validate = function (fileName, json, callback) {
    schemaDAO.findByName(fileName, function (err, schema) {
        if (err) {
            callback(err)
        } else {
            var Validator = require('jsonschema').Validator;
            var v = new Validator();
            var result = v.validate(JSON.parse(json), JSON.parse(schema))
            callback(null, result)
        }
    });
}

module.exports.define = function (exampleJson, callback) {
    var jsonSchemaGenerator = require('json-schema-generator')
    var schema = jsonSchemaGenerator(exampleJson)

    callback(null, schema)
}