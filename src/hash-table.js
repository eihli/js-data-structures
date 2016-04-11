var Hash = require('./hash');
var HashStorage = require('./hash-storage');

module.exports = function(size) {
  var storage;

  function HashTable() {
    size = size || 2;
    storage = new HashStorage(size);
  }

  HashTable.prototype.add = function(key, value) {
    handleResizing();
    var index = hash(key, size);
    storage.add(index, key, value);
  };

  function handleResizing() {
    if(shouldDouble()) {
      double();
    } else if (shouldHalve()) {
      halve();
    }
  }

  function shouldDouble() {
    return storage.capacity() > 0.75;
  }

  function double() {
    newStorage = new HashStorage(size * 2);
    storage.each(function(key, val) {
      newStorage.add(hash(key, newStorage.size(), key, val));
    });
    storage = newStorage;
  }

  function shouldHalve() {
    return storage.capacity() < 0.25 && size > 1;
  }

  function halve() {
    console.log("Halving");
  }

  HashTable.prototype.remove = function(key) {
    return storage.remove(hash(key, size), key);
  };

  HashTable.prototype.get = function(key) {
    return storage.get(hash(key, size), key);
  };

  HashTable.prototype.size = function() {
    return storage.size();
  };

  function hash(key, size) {
    return Hash.getIndex(key, size);
  }

  return new HashTable();
};
