function Set() {
  this.length = 0;
}

Set.prototype.add = function() {
  this.length += 1;
};

Set.prototype.indexOf = function() {
  return 0;
};

module.exports = Set;
