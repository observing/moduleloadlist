describe('moduleLoadList', function () {
  'use strict';

  var assume = require('assume')
    , mocha = require('mocha')
    , list = require('./');

  it('is exported as function', function () {
    assume(list).to.be.a('function');
  });

  it('returns an array when called', function () {
    assume(list()).to.be.a('array');
  });

  it('contains loaded modules', function () {
    var loaded = list();

    assume(loaded).to.contain('UserModule .');
    assume(loaded).to.contain('UserModule mocha');
    assume(loaded).to.contain('UserModule assume');
    assume(loaded).to.contain('Binding fs');
  });
});
