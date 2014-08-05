'use strict';

/**
 * @ngdoc function
 * @name tommysiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tommysiteApp
 */
angular.module('tommysiteApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
