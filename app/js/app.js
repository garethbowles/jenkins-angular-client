'use strict';

/* App Module */

var jenkinsclientApp = angular.module('jenkinsclientApp', [
  'ngRoute',
  'jenkinsclientControllers'
]);

jenkinsclientApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/jobs', {
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
        redirectTo: '/jobs'
      });
  }]);
