

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
        classMethods: {
            associate: function(models) {
                Users.hasMany(models.Tasks);
            }
        }
    });

    return Users;
};