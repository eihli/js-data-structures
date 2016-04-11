var expect = require('chai').expect;
var HashStorage = require('../src/hash-storage');

describe('HashStorage', function() {
  var storage;

  beforeEach(function() {
    storage = new HashStorage(1);
  });

  describe('initialize', function() {
    it('can be initialized with a certain size', function() {
      expect(storage.size()).to.equal(1);
    });
  });

  describe('push', function() {
    it('returns null if given index above size', function() {
      expect(storage.add(1, 'key', 'value')).to.equal(null);
    });

    it('returns null if pushing duplicate index/key', function() {
      storage = new HashStorage(2);
      storage.add(0, 'key', 'value');
      expect(storage.add(0, 'key', 'value')).to.equal(null);
    });
  });

  describe('get', function() {
    it('returns the value at the index given with the key given', function() {
      storage.add(0, 'eric', 'engineer');
      expect(storage.get(0, 'eric')).to.equal('engineer');
    });

    it('returns undefined if key not in storage at index', function() {
      expect(storage.get(0, 'eric')).to.equal(undefined);
    });
  });

  describe('capacity', function() {
    it('returns the percent of buckets used', function() {
      expect(storage.capacity()).to.equal(0);
      storage.add(0, 'eric', 'engineer');
      expect(storage.capacity()).to.equal(1);
      storage = new HashStorage(4);
      storage.add(0, 'eric', 'engineer');
      expect(storage.capacity()).to.equal(0.25);
    });
  });
});
