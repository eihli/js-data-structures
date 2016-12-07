var expect = require('chai').expect;

userMock = {
  name: "Alice",
  email: "alice@example.com",
  payment_details: {
    ssn: "942-55-9211",
    card_type: "Amex",
    payment_date: "20161113"
  }
};
var obfuscate_user = require('../../src/obfuscate/obfuscate').obfuscate_user;
var obfuscate_users = require('../../src/obfuscate/obfuscate').obfuscate_users;

describe('obfuscating the ssn', function() {
  it('removes the ssn', function() {
    expect(obfuscate_user(userMock).payment_details.ssn).to.equal(undefined);
  });
});

describe('obfuscating the ssn', function() {
  it('removes the ssn', function() {
    expect(obfuscate_user(userMock).payment_details.ssn).to.equal(undefined);
  });
});
