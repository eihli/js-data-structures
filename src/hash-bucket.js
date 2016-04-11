var HashItem = require('./hash-item');

module.exports = function() {
  var bucket;

  function HashBucket() {
    bucket = [];
  }

  HashBucket.prototype.add = function(key, value) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i].key() === key) {
        bucket[i] = new HashItem(key, value);
        return null;
      }
    }
    bucket.push(new HashItem(key, value));
  };

  HashBucket.prototype.remove = function(key) {
    var newBucket = [];
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i].key() !== key) {
        newBucket.push(bucket[i]);
      }
    }
    bucket = newBucket;
  };

  HashBucket.prototype.get = function(key) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i].key() === key) {
        return bucket[i].value();
      }
    }
  };

  HashBucket.prototype.size = function() {
    return bucket.length;
  };

  return new HashBucket();
};
