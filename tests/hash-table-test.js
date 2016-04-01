var should = require('chai').should();
var HashTable = require('../src/hash-table.js');

describe('Hash Table', function() {
  beforeEach(function() {
    myHash = new HashTable();
  });

  describe('add', function() {
    it('should have an add method', function() {
      myHash.add.should.be.a('function');
    });

    it('should increase size', function() {
      oldSize = myHash.size();
      myHash.add();
      myHash.size().should.equal(oldSize + 1);
    });
  });

  describe('get', function() {
    it('should have a get method', function() {
      myHash.get.should.be.a('function');
    });

    xit('should return the value of the key passed in', function() {

    });
  });

  it('should have a size method', function() {
    myHash.size().should.be.a('number');
  });
});
