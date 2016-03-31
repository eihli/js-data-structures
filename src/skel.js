var helperFunctionToCapitalizeAString = function(string) {
  // This functio won't be accessible to the tests because it is not
  // being exported to module.exports. But we are free
  // to use it inside of this file.
  return string.toUpperCase();
};

// Anything we export is part of our module.
// We'll have access to it in any file that has the following at the top
// var moduleName = require('modulePath/moduleName');
// or
// var skel = require('../src/skel.js'); In this example

module.exports.getName = function() {
  return "Skel";
};


module.exports.getCapitalizedName = function() {
  return helperFunctionToCapitalizeAString(exports.getName());
};
