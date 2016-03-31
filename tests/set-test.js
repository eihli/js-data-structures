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

    it('should return index of element passed in', function() {
      mySet.add('foo');
      mySet.indexOf('foo').should.equal(0);
    });

    it('should return less than 0 if element is not in list', function() {
      mySet.indexOf('bar').should.equal(-1);
    });
  });

  describe('contains', function() {
    it('should return false on empty set', function() {
      should.equal(mySet.contains(), false);
    });

    it('should return true if element is in set', function() {
      mySet.add('foo');
      mySet.contains('foo').should.be.true;
    });

    it('should return false if an element is not in the set', function() {
      mySet.contains('foo').should.be.false;
    });
  });
});
