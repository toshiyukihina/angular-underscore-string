'use strict';

describe('Filter: unescape', function () {

  // load the filter's module
  beforeEach(module('angularUnderscoreStringApp'));

  // initialize a new instance of the filter before each test
  var unescape;
  beforeEach(inject(function ($filter) {
    unescape = $filter('unescape');
  }));

  it('should return the input prefixed with "unescape filter:"', function () {
    var text = 'angularjs';
    expect(unescape(text)).toBe('unescape filter: ' + text);
  });

});
