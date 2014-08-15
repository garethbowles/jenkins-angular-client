'use strict';

/* Filters */

angular.module('jenkinsclientFilters', []).filter('buildStatusImg', function() { 
  return function(input) {
    var image = ""     
    switch(input) {
      case "red":
        image = "images/red.png";
        break;
      case "blue":
        image = "images/blue.png";
        break;
      case "grey":
        image = "images/grey.png";
        break;
      case "yellow":
        image = "images/yellow.png";
        break;
      case "disabled":
        image = "images/grey.png";
        break;
      default:
        image = "images/grey.png";
      }
      return image;
    };
});
