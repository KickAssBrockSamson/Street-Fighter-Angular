'use strict';

/* Services */

var streetFighterServices = angular.module('streetFighterServices', ['ngResource']);

streetFighterServices.factory('Fighter', ['$resource', 
	function($resource){
		return $resource('fighters/:fighterId.json', {}, {
			query: {method:'GET', params:{fighterId:'fighters'}, isArray:true}
		});
	}]);