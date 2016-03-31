var should = require('chai').should();
var HashTable = require('../src/hash-table.js');

describe('Hash Table', function() {
  beforeEach(function() {
    myHash = new HashTable();
  });

  it('should have an add method', function() {
    myHash.add.should.be.a('function');
  });

  it('should have a size method', function() {
    myHash.size().should.be.a('number');
  });
});
