
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


module.exports.execute = function () {
    var fs = require('fs')

    var jsonSchemaGenerator = require('json-schema-generator')
    var json = require('../files/json')

    var schema = jsonSchemaGenerator(json)

    fs.writeFile('./app/files/schema.json', JSON.stringify(schema, null, 2), 'utf-8', function (err) {
        if (err) {
            console.log('ERROR: ' + err)
        } else {
            fs.readFile('./app/files/test.json', 'utf-8', function (err, file) {
                var Validator = require('jsonschema').Validator;
                var v = new Validator();
                console.log('####### ');
                console.log(v.validate(JSON.parse(file), schema));

                /*
                var chai = require('chai');
                chai.use(require('chai-json-schema'));
                var assert = chai.assert
                var result = assert.jsonSchema(JSON.parse(file), schema)
                */
            });
        }
    });
}

