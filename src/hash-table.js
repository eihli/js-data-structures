module.exports = (function() {
  var Hash = require('./hash');
  function HashTable(numBuckets) {
    numBuckets = numBuckets || 2;
    this._storage = [];
    this._numUsedBuckets = 0;
    this._size = 0;
    initialize.call(this, numBuckets);
  }

  initialize = function(numBuckets) {
    for (var i = 0; i < numBuckets; i++) {
      this._storage.push([]);
    }
  };

  HashTable.prototype.add = function(key, value) {
    if (this.capacity() >= 0.75) {
      this.resize();
    }
    var indexOfBucket = hash(key, numBuckets());
    var bucket = this._storage[indexOfBucket] || [];
    if (bucket.length === 0) {
      this._numUsedBuckets += 1;
    }
    bucket.push([key, value]);
    this._size++;
    this._storage[indexOfBucket] = bucket;
  };

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
    return getValueAt.call(this, key);
  };

  numBuckets = function() {
    return this._storage.length;
  };

  HashTable.prototype.size = function() {
    return this._size;
  };

  HashTable.prototype.capacity = function() {
    return 0.0 + this._numUsedBuckets / this.size();
  };

  function getValueAt(key) {
    var indexOfBucket = hash(key, numBuckets());
    var bucket = this._storage[indexOfBucket] || [];
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
    return undefined;
  }

  function hash(key, size) {
    Hash.getIndex(key, size);
  }

  return HashTable;
})();
