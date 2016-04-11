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
    // console.log(storage, key, size);
    var index = hash(key, size);
    storage.add(index, key, value);
  };

  function handleResizing() {
    if(shouldDouble()) {
      console.log("Doubling");
    } else if (shouldHalve()) {
      console.log("Halving");
    }
  }

  function shouldDouble() {
    return storage.capacity() > 0.75;
  }

  function shouldHalve() {
    return storage.capacity() < 0.25;
  }

  HashTable.prototype.remove = function(key) {
    var indexOfBucket = hash(key, this.size());
    var oldBucket = this._storage[indexOfBucket] || [];
    var newBucket = [];
    var removed = false;
    for (var i = 0; i < oldBucket.length; i++) {
      if (oldBucket[i][0] !== key) {
        newBucket.push(oldBucket[i]);
      } else {
        removed = true;
        this._size--;
      }
    }
    this._storage[indexOfBucket] = newBucket;
    if (newBucket.length === 0) {
      this._numUsedBuckets -= 1;
    }
    return removed;
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
