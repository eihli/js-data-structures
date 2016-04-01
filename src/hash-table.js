function HashTable() {
  this._storage = [];
}

HashTable.prototype.add = function(key, value) {
  this._storage.push([key, value]);
};

HashTable.prototype.get = function(key) {
  for (var i = 0; i < this.size(); i++) {
    if (this._storage[i][0] === key) {
      return this._storage[i][1];
    }
  }
  return undefined;
};

HashTable.prototype.size = function() {
  return this._storage.length;
};

module.exports = HashTable;
