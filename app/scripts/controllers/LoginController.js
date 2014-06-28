angular.module('barmaddenApp').controller('LoginController', function ($scope, $resource, $location, $cookieStore) {
  
  this.user = {};

  $scope.login = function () {

    var credentials = $resource('/auth/login',this.user);
    var isLogged = credentials.get(function () { 
      if(isLogged.code === 1) {
        $cookieStore.put('login', 1);
        $cookieStore.put('id', isLogged.id);
        $location.path('/profile/' + isLogged.id)
      }
      else {
        $cookieStore.put('login', 0);
        $location.path('/login/')
      }
    });
  };

  $scope.logout = function () {
    $cookieStore.remove('login');
    $cookieStore.remove('id');
  };
});