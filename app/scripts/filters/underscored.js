'use strict';

angular.module('angularUnderscoreStringApp')
  .filter('underscored', function () {
    return function (input) {
      return _.str.underscored(input);
    };
  });
