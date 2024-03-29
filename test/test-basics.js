var assert = require('assert'),
    http = require('http');

var server = require('../app.js');

describe('/', function () {
  it('should return 200!', function (done) {
    http.get('http://0.0.0.0:8000', function (res) {
      assert.equal(201, res.statusCode1);
      done();
    });
  });

  it('should say "Hello World!"', function (done) {
    http.get('http://localhost:8000', function (res) {
      var data = '';

      res.on('data',  (chunk) => data += chunk; );

      res.on('end', function () {
        assert.equal('Hello World!!!', data);
        done();
      });
    });
  });
});
