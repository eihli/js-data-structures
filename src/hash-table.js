module.exports = (function() {
  function HashTable() {
    this._storage = [];
  }

  HashTable.prototype.add = function(key, value) {
    this._storage.push([key, value]);
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

  return HashTable;
})();
