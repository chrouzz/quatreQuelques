'use strict';
var barmadden = angular.module('barmaddenApp', ['ngRoute', 'ngResource', 'ngCookies', 'ui.router', 'ui.bootstrap']);


barmadden.run(function($rootScope, $state, Auth) {
  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
    if (!Auth.authorize(toState.data.access)) {
      event.preventDefault();

      $state.go('anon.login');
    }
  });
});

barmadden.config(function ($stateProvider, $urlRouterProvider, AccessLevels) {
    $urlRouterProvider.otherwise('/');


    $stateProvider
    .state('anon', {
      abstract: true,
      template: '<ui-view/>',
      data: {
        access: AccessLevels.anon
      }
    })
    .state('anon.home', {
        url: '/',
        templateUrl: '/views/main.html',
        controller: 'ArticlesController'

    })
    .state('anon.signup', {
        url: '/signup',
        templateUrl: '/views/signup.html',
        controller: 'SignupController'

    })
    .state('anon.article', {
        url: '/article/view',
        templateUrl: '/views/article.html',
        controller: 'ArticlesController'
    });
    $stateProvider
    .state('user', {
        abstract: true,
        template: '<ui-view/>',
        data: {
          access: AccessLevels.user
        }
      })
    .state('user.profile', {
        url: '/profile/:id', 
        templateUrl: '/views/profile.html',
        controller: 'MemberController'

    })
    .state('user.inbox', {
        url: '/inbox',
        templateUrl: '/views/inbox.html'

    })
    .state('user.members', {
        url: '/members',
        templateUrl: '/views/user.html',
        controller: 'MembersController'

    })
    .state('user.message', {
        url: '/message', 
        templateUrl: '/views/message.html',
        controller: 'MessageController'
    })
    .state('user.searchmembers', {
        url: '/searchmembers', 
        templateUrl: '/views/searchmembers.html',
        controller: 'SearchMembersController'
    })
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


