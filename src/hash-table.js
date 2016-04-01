function HashTable() {
  this._storage = [];
}

HashTable.prototype.add = function(element) {
  this._storage.push(element);
};

HashTable.prototype.get = function() {

};

HashTable.prototype.size = function() {
  return this._storage.length;
};

module.exports = HashTable;
