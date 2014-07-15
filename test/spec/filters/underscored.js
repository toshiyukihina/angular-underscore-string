'use strict';

describe('Filter: underscored', function () {

  // load the filter's module
  beforeEach(module('angularUnderscoreStringApp'));

  // initialize a new instance of the filter before each test
  var underscored;
  beforeEach(inject(function ($filter) {
    underscored = $filter('underscored');
  }));

  it('should return the input prefixed with "underscored filter:"', function () {
    var text = 'angularjs';
    expect(underscored(text)).toBe('underscored filter: ' + text);
  });

});
