'use strict';

angular.module('angularUnderscoreStringApp')
  .filter('camelize', function () {
    return function (input) {
      return _.str.camelize(input);
    };
  });
