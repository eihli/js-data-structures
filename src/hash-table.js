function HashTable() {
  this._storage = [];
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

HashTable.prototype.hash = function(key, maxSize){
  var total = 0;
  for(var i = 0; i < key.length; i++){
    total += key.charCodeAt(i);
  }
  return total % maxSize;
};

module.exports = HashTable;
