var Set = require('../src/set.js');

describe('set', function() {
  var mySet;
  beforeEach(function() {
    mySet = new Set();
  });

  it('should exist', function() {
    mySet.should.be.an.instanceof(Set);
  });

  it('should have a length', function() {
    mySet.length.should.be.a('number');
  });
});
