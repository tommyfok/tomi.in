'use strict';

/**
 * @ngdoc function
 * @name tommysiteApp.controller:LinkCtrl
 * @description
 * # LinkCtrl
 * Controller of the tommysiteApp
 */
angular.module('tommysiteApp')
  .controller('LinkCtrl', function ($scope, links, $location) {
    var self = this;
    self.links = links;
    self.showCount = 10;
  });
