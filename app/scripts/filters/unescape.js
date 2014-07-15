'use strict';

angular.module('angularUnderscoreStringApp')
  .filter('unescape', function () {
    return function (input) {
      return _.unescape(input);
    };
  });
