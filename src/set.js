function Set() {
  this.length = 0;
  this._set = [];
}

Set.prototype.add = function(element) {
  this.length += 1;
  this._set.push(element);
};

Set.prototype.indexOf = function(element) {
  if (arguments.length === 0) {
    throw new Error('indexOf requires an argument');
  }
  for (var i = 0; i < this.length; i++) {
    if (this._set[i] === element) {
      return i;
    }
  }
  return -1;
};

Set.prototype.contains = function(element) {
  return this.indexOf(element) >= 0;
};

module.exports = Set;
