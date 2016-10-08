module.exports = (function() {
  var Hash = {
    djb2: djb2,
    getIndex: function(key, size) {
      return djb2(key) % size;
    }
  };


   function djb2(str) {
     var hash = 5381;
     for (var i = 0; i < str.length; i++) {
       hash = Math.abs((hash * 33) + hash ^ str.charCodeAt(i));
     }
     return hash;
   }
   return Hash;
})();
