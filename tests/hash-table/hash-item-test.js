var expect = require('chai').expect;
var HashItem = require('../src/hash-item');

describe('hash item', function() {
  describe('initialize', function() {
    var hashItem;
    beforeEach(function() {
      hashItem = new HashItem('key', 'value');
    });

    it('should initialize with a key and value', function() {
      expect(hashItem.key()).to.equal('key');
      expect(hashItem.value()).to.equal('value');
    });
  });
});
