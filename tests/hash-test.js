var expect = require('chai').expect;
var Hash = require('../src/hash.js');

describe('hash', function() {
  it('should generate numbers between 0 and size', function() {
    str = '';
    for (var i = 0; i < 10; i++) {
      str += 'a';
      expect(Hash.getIndex(str, 4)).to.be.gte(0);
      expect(Hash.getIndex(str, 4)).to.be.lt(4);
    }
  });

  it('should generate numbers evenly across all buckets', function() {
    var bucketCounts = {};
    var chars = 'abcdefghijklmnopqrstuvwxyz';
    for (var i = 0; i < 10000; i++) {
      var randomLength = Math.floor(Math.random() * 10) + 5;
      var randomChars = '';
      for (var j = 0; j < randomLength; j++) {
        var randomIndex = Math.floor(Math.random() * chars.length);
        var randomChar = chars[randomIndex];
        randomChars += randomChar;
      }
      var bucket = Hash.getIndex(randomChars, 8);
      if (bucketCounts[bucket]) {
        bucketCounts[bucket] += 1;
      } else {
        bucketCounts[bucket] = 1;
      }
    }

    var totalCount = 0;
    for (var key in bucketCounts) {
      totalCount += bucketCounts[key];
    }
    var averageCount = totalCount / 8;
    for (key in bucketCounts) {
      expect(bucketCounts[key] / averageCount).to.be.gte(0.8);
      expect(bucketCounts[key] / averageCount).to.be.lte(1.2);
    }
  });
});
