function HashTable() {
  this._storage = [];
}

HashTable.prototype.add = function(element) {
  if(arguments.length === 2) {
    this._storage.push(element);
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

module.exports = HashTable;
