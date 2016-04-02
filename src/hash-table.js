function HashTable(limit) {
  this._storage = [];
  this.limit = limit;
}

HashTable.prototype.add = function(key, value) {
  if(arguments.length === 2) {
    for (var i = 0; i < this._storage.length; i++) {
      if (this._storage[i][0] === key) {
        this._storage[i][1] = value;
        return true;
      }
    }
    this._storage.push([key, value]);
    return true;
  } else {
    return -1;
  }
};

HashTable.prototype.get = function() {

};

HashTable.prototype.size = function() {
  return this._storage.length;
};

HashTable.prototype.hash = function(string) {
  return string.length % this.limit;
};

module.exports = HashTable;
