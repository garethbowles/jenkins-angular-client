'use strict';

/* App Module */

var jenkinsclientApp = angular.module('jenkinsclientApp', [
  'ngRoute',
  'jenkinsclientControllers',
  'jenkinsclientFilters'
]);

jenkinsclientApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/views', {
        templateUrl: 'partials/view-list.html',
        controller: 'viewListCtrl'
      }).
      when('/views/:viewId', {
        templateUrl: 'partials/job-list.html',
        controller: 'jobListCtrl'
      }).
      when('/jobs/:jobId', {
        templateUrl: 'partials/job-detail.html',
        controller: 'jobDetailCtrl'
      }).
      when('/nodes', {
        templateUrl: 'partials/node-list.html',
        controller: 'nodeListCtrl'
      }).
      when('/nodes/:nodeId', {
        templateUrl: 'partials/node-detail.html',
        controller: 'nodeDetailCtrl'
      }).
      otherwise({
        redirectTo: '/views'
      });
  }]);
