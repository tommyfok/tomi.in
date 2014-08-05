'use strict';

/**
 * @ngdoc function
 * @name tommysiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tommysiteApp
 */
angular.module('tommysiteApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
