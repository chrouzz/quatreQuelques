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
        controller: 'MainCtrl'

    });      
});

// directive that prevents submit if there are still form errors
barmadden.directive('validSubmit', [ '$parse', function($parse) {
        return {
            // we need a form controller to be on the same element as this directive
            // in other words: this directive can only be used on a &lt;form&gt;
            require: 'form',
            // one time action per form
            link: function(scope, element, iAttrs, form) {
                form.$submitted = false;
                // get a hold of the function that handles submission when form is valid
                var fn = $parse(iAttrs.validSubmit);
                
                // register DOM event handler and wire into Angular's lifecycle with scope.$apply
                element.on('submit', function(event) {
                    scope.$apply(function() {
                        // on submit event, set submitted to true (like the previous trick)
                        form.$submitted = true;
                        // if form is valid, execute the submission handler function and reset form submission state
                        if (form.$valid) {
                            fn(scope, { $event : event });
                            form.$submitted = false;
                        }
                    });
                });
            }
        };
    }
]);

// handle form submission when the form is completely valid
barmadden.controller('MainCtrl', function($scope) {
  $scope.sendForm = function() {
    alert('form valid, sending request...');
  };
});