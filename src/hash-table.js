module.exports = (function() {
  function HashTable() {
    this._storage = [];
  }

  HashTable.prototype.add = function(key, value) {
    var indexOfBucket = hash(key, this.size());
    var bucket = this._storage[indexOfBucket] || [];
    bucket.push([key, value]);
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
      }
    }
    this._storage[indexOfBucket] = newBucket;
    return removed;
  };

  HashTable.prototype.get = function(key) {
    return getValueAt.call(this, key);
  };

  HashTable.prototype.size = function() {
    return this._storage.length;
  };

  function getValueAt(key) {
    var indexOfBucket = hash(key, this.size());
    var bucket = this._storage[indexOfBucket] || [];
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
    return undefined;
  }

  function hash(key, size) {
    var k = keyToInt(key);
    return (k * (k + 3.0)) % size;
  }

  function keyToInt(key) {
    var value = 0;
    for (var i = 0; i < key.length; i++) {
      value += key.charCodeAt(i);
    }
    return value;
  }

  return HashTable;
})();
