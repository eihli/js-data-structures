var HashItem = require('./hash-item');
// add, get, init with size, can't push over size
module.exports = function(size) {
  var storage, numBucketsUsed;

  function Storage() {
    size = size || 1;
    storage = [];
    numBucketsUsed = 0;
    for (var i = 0; i < size; i++) {
      storage.push([]);
    }
  }

  Storage.prototype.size = function() {
    return size;
  };

  Storage.prototype.add = function(index, key, value) {
    if (index >= size) {
      return null;
    }
    var bucket = storage[index];
    if (bucket.length === 0) {
      numBucketsUsed++;
    }
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i].key() === key) {
        bucket[i] = new HashItem(key, value);
        return null;
      }
    }
    bucket.push(new HashItem(key, value));
  };

  Storage.prototype.get = function(index, key) {
    var bucket = storage[index];
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i].key() === key) {
        return bucket[i].value();
      }
    }
    return undefined;
  };

  Storage.prototype.capacity = function() {
    return numBucketsUsed / size;
  };

  return new Storage();
};
