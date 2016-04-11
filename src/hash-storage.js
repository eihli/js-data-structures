var HashItem = require('./hash-item');
var HashBucket = require('./hash-bucket');
// add, get, init with size, can't push over size
module.exports = function(size) {
  var storage, numBucketsUsed;

  function Storage() {
    size = size || 1;
    storage = [];
    numBucketsUsed = 0;
    for (var i = 0; i < size; i++) {
      storage.push(new HashBucket());
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
    if (bucket.size() === 0) {
      numBucketsUsed++;
    }
    bucket.add(key, value);
  };

  Storage.prototype.get = function(index, key) {
    var bucket = storage[index];
    return bucket.get(key);
  };

  Storage.prototype.remove = function(index, key) {
    var newBucket = [];
    storage[index].remove(key);
  };

  Storage.prototype.capacity = function() {
    return numBucketsUsed / size;
  };

  Storage.prototype.each = function(func) {
    for (var i = 0; i < storage.length; i++) {
      for (var j = 0; j < storage[i].length; j++) {
        func(storage[i][j].key(), storage[i][j].value());
      }
    }
  };

  return new Storage();
};
