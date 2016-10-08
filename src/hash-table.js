var Hash = require('./hash');
var HashStorage = require('./hash-storage');

module.exports = function(size) {
  size = size || 2;
  var storage;

  function HashTable() {
    storage = new HashStorage(size);
  }

  HashTable.prototype.add = function(key, value) {
    handleResizing();
    var index = hash(key, this.size());
    storage.add(index, key, value);
  };

  HashTable.prototype.remove = function(key) {
    return storage.remove(hash(key, this.size()), key);
  };

  HashTable.prototype.get = function(key) {
    return storage.get(hash(key, this.size()), key);
  };

  HashTable.prototype.size = function() {
    return storage.size();
  };

  function hash(key, size) {
    return Hash.getIndex(key, size);
  }

  function handleResizing() {
    if(shouldDouble()) {
      double();
    } else if (shouldHalve()) {
      halve();
    }
  }

  function shouldDouble() {
    return storage.capacity() >= 0.75;
  }

  function double() {
    newStorage = new HashStorage(storage.size() * 2);
    storage.each(function(key, val) {
      newStorage.add(hash(key, newStorage.size(), key, val));
    });
    storage = newStorage;
  }

  function shouldHalve() {
    return storage.capacity() <= 0.25 && storage.size() > 1;
  }

  function halve() {
    newStorage = new HashStorage(size / 2);
    storage.each(function(key, val) {
      newStorage.add(hash(key, newStorage.size(), key, val));
    });
    storage = newStorage;
  }

  return new HashTable();
};
