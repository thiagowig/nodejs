



describe('Routes: Token', function () {
    
    var Users = app.db.models.Users;

    
    describe('POST /token', function () {
        
        
        beforeEach(function (done) {
            Users
                .destroy({where: {}})
                .then(function() {
                    Users.create({
                        name:"James",
                        email: "james@metallica.com",
                        password: "12345"
                    });
                })
                .then(done());
        });

        
        describe('status 200', function () {
            
            
            it('should return an authenticated user', function (done) {
                request.post('/token')
                    .send({
                        email: 'james@metallica.com',
                        password: '12345'
                    })
                    .expect(200)
                    .end(function(error, res) {
                        expect(res.body).to.include.keys('token');
                        done(error);
                    })
                
            });
            

        });
        
        

    });
    

});
