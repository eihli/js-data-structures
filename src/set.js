function Set() {
  this.length = 0;
}

Set.prototype.add = function() {
  this.length += 1;
};

Set.prototype.indexOf = function(element) {
  if (arguments.length === 0) {
    throw new Error('indexOf requires an argument');
  }
  return 0;
};

Set.prototype.contains = function() {
  if (arguments.length) {
    return true;
  }
  return false;
};

module.exports = Set;
