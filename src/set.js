function Set() {
  this.length = 0;
}

Set.prototype.add = function() {
  this.length += 1;
};

module.exports = Set;
