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

    it('initializes length to 0', function() {
      expect(storage.length()).to.equal(0);
    });
  });

  describe('push', function() {
    it('increases length', function() {
      storage.push(0, 'key', 'value');
    });

    it('does not increase length if length would grow above size', function() {
      storage.push(0, 'key', 'value');
      storage.push(0, 'key', 'value');
      expect(storage.length()).to.equal(1);
    });

    it('does not increase length if pushing duplicate index/key', function() {
      storage = new HashStorage(2);
      storage.push(0, 'key', 'value');
      storage.push(0, 'key', 'value');
      expect(storage.length()).to.equal(1);
    });
  });

  describe('get', function() {
    it('returns the value at the index given with the key given', function() {
      storage.push(0, 'eric', 'engineer');
      expect(storage.get(0, 'eric')).to.equal('engineer');
    });

    it('returns undefined if key not in storage at index', function() {
      expect(storage.get(0, 'eric')).to.equal(undefined);
    });
  });
});
