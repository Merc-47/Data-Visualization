
var expect  = require('chai').expect;
var request = require('request');

describe('Status and content', function() {
    describe ('Status', function() {
        it('Main page content', function(done){
            request('http://localhost:8080/', function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
it('Retrived data content', function(done) {
    request('http://localhost:8080/Years?' , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});
});
});