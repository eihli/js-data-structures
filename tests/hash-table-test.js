var should = require('chai').should();
var expect = require('chai').expect;
var HashTable = require('../src/hash-table.js');

describe('Hash Table', function() {
  beforeEach(function() {
    myHash = new HashTable(5);
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

    it('should add the key value pair to storage', function() {
      myHash.add('one', 1);
      myHash._storage[0].should.deep.equal(['one', 1]);
    });

    it('should overwrite value given the same key on add', function() {
      myHash.add('one', 1);
      myHash.add('one', 'one');
      myHash._storage[0].should.deep.equal(['one', 'one']);
    });
  });

  describe('hash', function() {
    it('is a function', function() {
      myHash.hash.should.be.a('function');
    });

    it('should return a number', function() {
      myHash.hash('test').should.be.a('number');
    });

    it('should return anumber between 0 and limit', function() {
      var str = '';
      for (var i = 0; i < 10; i++) {
        str += '1';
        myHash.hash(str).should.be.gte(0);
      }

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
