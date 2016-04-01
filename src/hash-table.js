module.exports = (function() {
  function HashTable() {
    this._storage = [];
  }

  HashTable.prototype.add = function(key, value) {
    this._storage.push([key, value]);
  };

  HashTable.prototype.remove = function(key) {
    for (var i = 0; i < this.size(); i++) {
      if (this._storage[i][0] === key) {
        this._storage[i] = [];
        return this._storage[i][1];
      }
    }
    return false;
  };

  HashTable.prototype.get = function(key) {
    return getValueAt.call(this, key);
  };

  HashTable.prototype.size = function() {
    return this._storage.length;
  };

  function getValueAt(key) {
    for (var i = 0; i < this.size(); i++) {
      if (this._storage[i][0] === key) {
        return this._storage[i][1];
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
