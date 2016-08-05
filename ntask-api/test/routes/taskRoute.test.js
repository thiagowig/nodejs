var jwt = require('jwt-simple');


describe('Rpute: Task', function () {
    var Users = app.db.models.Users;
    var Tasks = app.db.models.Tasks;

    var jwtSecret = app.libs.config.jwtSecret;

    var token;
    var fakeTask;

    
    beforeEach(function (done) {
        Users
            .destroy({where: {}})
            .then(function() {

                return Users
                            .create({
                                name:"James",
                                email: "james@metallica.com",
                                password: "12345"
                            });
            })
            .then(function(user) {
                return Tasks
                            .bulkCreate([{
                                title: "Go Work",
                                user_id: user.id
                            },
                            {
                                title: "Study",
                                user_id: user.id
                            }
                            ]);
            })
            .then(function(tasks) {
                fakeTask = tasks[0];
                token = jwt.encode({id: user.id}, jwtSecret);
            });

        done();

    });
    
    describe('GET /task', function () {
        describe('status 200', function () {
            it('should returns a list of tasks', function (done) {

                request.get('/task')
                    .set('Authorization', 'JWT ' + token)
                    .expect(200)
                    .end(function(error, res) {
                        expect(res.body[0].title).to.eql('Work');
                        done(error);
                    })

            });
        });
    });

    describe('POST /task', function () {
        describe('status 200', function () {
            it('should create a new task', function (done) {
                
            });
        });
    });

     describe('GET /task/:id', function () {
        describe('status 200', function () {
            it('should return one task', function (done) {
                
            });
        });
        describe('status 404', function () {
            it('should throw an error when a task doesnt exists', function (done) {
                
            });
        });
    });

    describe('PUT /task/:id', function () {
        describe('status 204', function () {
            it('should update a task', function (done) {
                
            });
        });
    });

    describe('DELETE /task/:id', function () {
        describe('status 204', function () {
            it('should delete a task', function (done) {
                
            });
        });
    });
    
    
});
