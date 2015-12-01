'use strict';

/* Controllers */

var streetFighterControllers = angular.module('streetFighterControllers', []);
 
streetFighterControllers.controller('FighterListCtrl', ['$scope', 'Fighter',
  function ($scope, Fighter) {
    $scope.fighters = Fighter.query();
   	$scope.headerHtml = "partials/header.html";
    $scope.orderProp = 'age';
    $scope.numLimit = 5;
  }]);
 
streetFighterControllers.controller('FighterDetailCtrl', ['$scope', '$routeParams', 'Fighter',
  function($scope, $routeParams, Fighter) {
    $scope.fighter = Fighter.get({fighterId: $routeParams.fighterId}, function(fighter) {
      $scope.mainImageUrl = fighter.images[0];
      $scope.headerHtml = "partials/header.html";
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);