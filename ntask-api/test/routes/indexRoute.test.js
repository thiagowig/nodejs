

describe('Routes: Index', function () {
    
    
    describe('GET /', function () {
        
        
        it('should return the 200 status code', function (done) {
            
            request.get('/')
                .expect(200)
                .end(function(error, res) {
                    var expectResult = {status: 'NTask API'};
                    expect(res.body).to.eql(expectResult);
                    done(error);
                })

        });
        

    });
    

});
