

var bcrypt = require('bcrypt');

module.exports = function(sequelize, DataType) {
    var definition = {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        email: {
            type: DataType.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    };

    const Users = sequelize.define('Users', definition, {
        hooks: {
            beforeCreate: function(user) {
                var salt = bcrypt.genSaltSync();
                user.password = bcrypt.hashSync(user.password, salt);
            }
        }, 
        classMethods: {
            associate: function(models) {
                Users.hasMany(models.Tasks);
            },
            isPassword: function(encodedPassword, password) {
                return bcrypt.compareSync(password, encodedPassword);
            }
        }
    });

    return Users;
};