
/*
module.exports = function(app) {
    return {
        findAll: function(params, callback) {
            return callback([
                {section: "Wishlist", description: "A home"},
                {section: "Serie", description: "The americans"} 
            ]);
        }
    }
}
*/

module.exports = function(sequelize, DataType) {
    var definition = {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        done: {
            type: DataType.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    };

    const Tasks = sequelize.define('Tasks', definition, {
        classMethods: {
            associate: function(models) {
                Tasks.belongsTo(models.Users);
            }
        }
    });

    return Tasks;
};