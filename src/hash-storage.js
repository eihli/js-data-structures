var HashItem = require('./hash-item');
// push, get, init with size, can't push over size
module.exports = function(size) {
  storage = [];
  length = 0;

  function Storage() {
    for (var i = 0; i < size; i++) {
      storage.push([]);
    }
  }

  Storage.prototype.size = function() {
    return size;
  };

  Storage.prototype.length = function() {
    return length;
  };

  Storage.prototype.push = function(index, key, value) {
    if (length === this.size()) {
      return;
    }
    var bucket = storage[index];
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i].key() === key) {
        bucket[i] = new HashItem(key, value);
        return;
      }
    }
    length++;
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

  return new Storage();
};
