angular.module('barmaddenApp').controller('LoginController', function ($scope, $resource) {
  
  this.user = {};


  $scope.getCredentials = function () {

    console.log(this.user.username);
    var credentials = $resource('/auth/login',this.user);
    var isLogged = credentials.get(function () { 
      if(isLogged.code === 1)
        console.log('We are logged');
      else
        console.log('Error in loggin');
    });
  };
  $scope.login = function (credentials) {
    console.log("   ");
  };
});