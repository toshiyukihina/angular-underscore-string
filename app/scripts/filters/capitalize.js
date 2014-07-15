'use strict';

angular.module('angularUnderscoreStringApp')
  .filter('capitalize', function () {
    return function (input) {
      return _.str.capitalize(input);
    };
  });
