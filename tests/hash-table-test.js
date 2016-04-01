var expect = require('chai').expect;
var sinon = require('sinon');
var HashTable = require('../src/hash-table.js');

describe('Hash Table', function() {
  beforeEach(function() {
    myHash = new HashTable();
  });

  describe('add', function() {
    it('should increase size', function() {
      var oldLength = myHash.size();
      myHash.add('eric');
      expect(myHash.size()).to.equal(oldLength + 1);
    });
  });

  describe('get', function() {
    it('should return the value of the key passed in', function() {
      myHash.add('eric', 'engineer');
      expect(myHash.get('eric')).to.equal('engineer');
    });

    it('should return undefined if key is not in hash', function() {
      expect(myHash.get('eric')).to.equal(undefined);
    });
  });

  describe('remove', function() {
    before(function() {
      myHash.add('eric', 'engineer');
      expect(myHash.size()).to.equal(1);
      expect(myHash.get('eric')).to.equal('engineer');
      myHash.remove('eric');
    });

    it('should remove key value pair from hash', function() {
      expect(myHash.get('eric')).to.equal(undefined);
    });

    it('should decrease size', function() {
      expect(myHash.size()).to.equal(0);
    });
  });

  describe('resizing', function() {
    it('should resize when >= 3/4 of the buckets are used', function() {
      var myHash = new HashTable(4);
      var resizeSpy = sinon.spy(myHash, 'resize');
      myHash.capacity = sinon.stub().returns(0.75);
      myHash.add('eric', 'engineer');
      expect(resizeSpy.called).to.equal(true);
    });
  });
});
