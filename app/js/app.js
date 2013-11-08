/**
* APP Module
*
* Main configuration for the app
*/

'use strict';

var APP = angular.module('APP', ['ngRoute']);

APP.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'parse/home.html',
		controller: 'HomeCtrl'
	})
}]);