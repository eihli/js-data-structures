var should = require('chai').should();
var expect = require('chai').expect;
var HashTable = require('../src/hash-table.js');

describe('Hash Table', function() {
  beforeEach(function() {
    myHash = new HashTable();
  });

  describe('add', function() {
    it('should have an add method', function() {
      myHash.add.should.be.a('function');
    });

    it('should throw error if called with invalid arguments', function() {
      myHash.add().should.equal(-1);
    });

    it('should not throw error if called with valid arguments', function(){
      myHash.add('three', 3).should.equal(true);
    });

    it('should increase size', function() {
      oldSize = myHash.size();
      myHash.add('two', 2);
      myHash.size().should.equal(oldSize + 1);
    });

    it('should add key value pair to storage', function() {
      myHash.add('one',1);
      expect(myHash._storage[0][0]).to.equal('one');
      expect(myHash._storage[0][1]).to.equal(1);
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
