

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
