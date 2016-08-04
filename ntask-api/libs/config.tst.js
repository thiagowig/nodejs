

module.exports = {

    // Database
    database: 'ntask_test',
    username: '',
    password: '',
    params: {
        dialect: 'sqlite',
        storage:  'ntask.sqlite',
        logging: false,
        define: {
            underscored: true
        }
    },

    // Auth
    jwtSecret: "NTALK_TEST",
    jwtSession: {session: false}
}; 