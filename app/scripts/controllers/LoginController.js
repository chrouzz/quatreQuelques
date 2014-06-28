angular.module('barmaddenApp').controller('LoginController', function ($scope, $resource, $location) {
  
  this.user = {};

  $scope.login = function () {

    var credentials = $resource('/auth/login',this.user);
    var isLogged = credentials.get(function () { 
      if(isLogged.code === 1)
        $location.path('/profile/' + isLogged.id)
      else
        $location.path('/login/')
    });
  };
});