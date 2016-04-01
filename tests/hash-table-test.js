var expect = require('chai').expect;
var HashTable = require('../src/hash-table.js');

describe('Hash Table', function() {
  beforeEach(function() {
    myHash = new HashTable();
  });

  describe('add', function() {
    it('should have an add method', function() {
      expect(myHash.add).to.be.a('function');
    });
  });

  describe('get', function() {
    it('should have a get method', function() {
      expect(myHash.get).to.be.a('function');
    });

    it('should return the value of the key passed in', function() {
      myHash.add('eric', 'engineer');
      expect(myHash.get('eric')).to.equal('engineer');
    });

    it('should return undefined if key is not in hash', function() {
      expect(myHash.get('eric')).to.not.exist;
    });
  });

  describe('remove', function() {
    it('should remove key value pair from hash', function() {
      myHash.add('eric', 'engineer');
      expect(myHash.get('eric')).to.exist;
      myHash.remove('eric');
      expect(myHash.get('eric')).to.not.exist;
    });
  });

  it('should have a size method', function() {
    expect(myHash.size()).to.be.a('number');
  });
});
