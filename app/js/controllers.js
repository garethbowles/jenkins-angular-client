'use strict';

/* Controllers */

var jenkinsclientControllers = angular.module('jenkinsclientControllers', []);

jenkinsclientControllers.controller('viewListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('http://opseng.builds.test.netflix.net/api/json?tree=views[name,url]').success(function(data) {
      $scope.views = data.views;
    });
  }]);

jenkinsclientControllers.controller('jobListCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('http://opseng.builds.test.netflix.net/view/' + $routeParams.viewId + 
        '/api/json?tree=jobs[name,color,url]').success(function(data) {
      $scope.jobs = data.jobs;
    });
  }]);

jenkinsclientControllers.controller('jobDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('http://opseng.builds.test.netflix.net/job/' + $routeParams.jobId + '/api/json').success(function(data) {
      $scope.job = data;
    });
  }]);

jenkinsclientControllers.controller('nodeListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('http://opseng.builds.test.netflix.net/computer/api/json').success(function(data) {
      $scope.nodes = data.netputer;
    });
  }]);

jenkinsclientControllers.controller('nodeDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('http://opseng.builds.test.netflix.net/computer/' + $routeParams.nodeId + '/api/json').success(function(data) {
      $scope.node = data;
    });
  }]);
