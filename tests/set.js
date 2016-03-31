var should = require('chai').should();
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

  describe('add', function() {
    var length;
    beforeEach(function() {
      length = mySet.length;
      mySet.add();
    });

    it('should increment length', function() {
      mySet.length.should.equal(length + 1);
    });
  });

  describe('indexOf', function() {
    it('should return a number', function() {
      mySet.indexOf('foo').should.be.a('number');
    });

    it('should require an argument', function() {
      (function() {
        mySet.indexOf()
      }).should.throw('indexOf requires an argument');
    });
  });

  describe('contains', function() {
    it('should return false on empty set', function() {
      should.equal(mySet.contains(), false);
    });
  });
});
