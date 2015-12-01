'use strict';

/* App Module */

var streetFighterApp = angular.module('streetFighterApp', [
  'ngRoute',
  'streetFighterControllers',
  'streetFighterFilters',
  'streetFighterServices'
]);
 
streetFighterApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/fighters', {
        templateUrl: 'partials/fighter-list.html',
        controller: 'FighterListCtrl'
      }).
      when('/fighters/:fighterId', {
        templateUrl: 'partials/fighter-detail.html',
        controller: 'FighterDetailCtrl'
      }).
      otherwise({
        redirectTo: '/fighters'
      });
  }]);