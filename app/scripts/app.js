'use strict';
var barmadden = angular.module('barmaddenApp', ['ngRoute']);
barmadden.config(function ($routeProvider) {
	console.log($routeProvider);
	console.log('tooto');
    $routeProvider
    .when('/', {
        templateUrl: '/views/main.html',
        controller: 'mainController'
    })
    .when('/signup', {
        templateUrl: '/views/create.html',
        controller: 'signupController'
    });      
});