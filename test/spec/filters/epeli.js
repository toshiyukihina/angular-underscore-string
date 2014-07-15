'use strict';

describe('Filter: epeli', function () {

  // load the filter's module
  beforeEach(module('angularUnderscoreStringApp'));

  // initialize a new instance of the filter before each test
  var epeli;
  beforeEach(inject(function ($filter) {
    epeli = $filter('epeli');
  }));

  it('should return the input prefixed with "epeli filter:"', function () {
    var text = 'angularjs';
    expect(epeli(text)).toBe('epeli filter: ' + text);
  });

});
