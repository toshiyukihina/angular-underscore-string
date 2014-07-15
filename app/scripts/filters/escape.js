'use strict';

angular.module('angularUnderscoreStringApp')
  .filter('escape', [function () {
    return function (input) {
      return _.escape(input);
    };
  }]);
