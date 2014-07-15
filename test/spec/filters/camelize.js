'use strict';

describe('Filter: camelize', function () {

  // load the filter's module
  beforeEach(module('angularUnderscoreStringApp'));

  // initialize a new instance of the filter before each test
  var camelize;
  beforeEach(inject(function ($filter) {
    camelize = $filter('camelize');
  }));

  it('should return the input prefixed with "camelize filter:"', function () {
    var text = 'angularjs';
    expect(camelize(text)).toBe('camelize filter: ' + text);
  });

});
