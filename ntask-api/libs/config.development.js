
var logger = require('./logger');

module.exports = {

    // Database
    database: 'ntask',
    username: '',
    password: '',
    params: {
        dialect: 'sqlite',
        storage:  'ntask.sqlite',
        logging: function(sql) {
            logger.info(new Date() + " - " + sql);
        },
        define: {
            underscored: true
        }
    },

    // Auth
    jwtSecret: "Nt@sk",
    jwtSession: {session: false}
}; 