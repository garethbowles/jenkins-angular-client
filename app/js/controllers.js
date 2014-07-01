'use strict';

/* Controllers */

var jenkinsclientControllers = angular.module('jenkinsclientControllers', []);

jenkinsclientControllers.controller('nodeListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('http://test.netflix.com/computer/api/json').success(function(data) {
      $scope.nodes = data.computer;
    });
  }]);

jenkinsclientControllers.controller('nodeDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('http://test.netflix.com/computer/' + $routeParams.nodeId + '/api/json').success(function(data) {
      $scope.node = data;
    });
  }]);
