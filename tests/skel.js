var should = require('chai').should();
var skel = require('../src/skel');

describe('skel', function() {

  it('should return it\'s name', function() {
    skel.getName().should.equal('Skel');
  });

  it('should not have access to helper function', function() {
    // We can't use the following
    // skel.helperFunctionToCapitalizeAString.should.equal(undefined)
    // because of the way 'should' works.
    // It adds the 'should' property to all objects. Since undefined
    // is not an object, it doesn't get that property.
    should.equal(skel.helperFunctionToCapitalizeAString, undefined);
  });
  
  it('should be able to return capitized name', function() {
    skel.getCapitalizedName().should.equal('SKEL');
  })
});