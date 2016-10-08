module.exports = function(key, value) {
  function HashItem() {
  }

  HashItem.prototype.key = function() {
    return key;
  };

  HashItem.prototype.value = function() {
    return value;
  };

  return new HashItem();
};
