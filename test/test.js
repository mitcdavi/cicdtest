var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
  it('respond with hello world 3', function(done) {
    request(app).get('/').expect('hello world 3', done);
  });
});
