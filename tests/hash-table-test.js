var expect = require('chai').expect;
var sinon = require('sinon');
var HashTable = require('../src/hash-table.js');

describe('Hash Table', function() {
  beforeEach(function() {
    myHash = new HashTable();
  });

  describe('public methods', function() {
    it('should only have add, remove, get, and size public methods', function() {
      expect(Object.keys(myHash.constructor.prototype)).to.deep.equal(
        ['add', 'remove', 'get', 'size']
      );
    });
  });

  describe('get', function() {
    it('should return undefined if key is not in hash', function() {
      expect(myHash.get('eric')).to.equal(undefined);
    });

    it('should return the value of the key passed in', function() {
      myHash.add('eric', 'engineer');
      expect(myHash.get('eric')).to.equal('engineer');
    });
  });

  describe('remove', function() {
    var myHash;
    before(function() {
      myHash = new HashTable();
      myHash.add('eric', 'engineer');
      expect(myHash.get('eric')).to.equal('engineer');
      myHash.remove('eric');
    });

    it('should remove key value pair from hash', function() {
      expect(myHash.get('eric')).to.equal(undefined);
    });
  });

  describe('resizing', function() {
    it('should resize when >= 3/4 of the buckets are used', function() {
      var myHash = new HashTable(1);
      expect(myHash.size()).to.equal(1);
      myHash.add('eric', 'engineer');
      myHash.add('zach', 'engineer');
      expect(myHash.size()).to.equal(2);
    });
  });
});
