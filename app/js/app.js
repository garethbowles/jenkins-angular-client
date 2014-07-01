'use strict';

/* App Module */

var jenkinsclientApp = angular.module('jenkinsclientApp', [
  'ngRoute',
  'jenkinsclientControllers'
]);

jenkinsclientApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/nodes', {
        templateUrl: 'partials/node-list.html',
        controller: 'nodeListCtrl'
      }).
      when('/nodes/:nodeId', {
        templateUrl: 'partials/node-detail.html',
        controller: 'nodeDetailCtrl'
      }).
      otherwise({
        redirectTo: '/nodes'
      });
  }]);
