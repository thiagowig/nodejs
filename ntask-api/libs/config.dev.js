

module.exports = {

    // Database
    database: 'ntask',
    username: '',
    password: '',
    params: {
        dialect: 'sqlite',
        storage:  'ntask.sqlite',
        define: {
            underscored: true
        }
    },

    // Auth
    jwtSecret: "Nt@sk",
    jwtSession: {session: false}
}; 