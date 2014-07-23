barmadden.controller('NavbarController', function($modal, $scope, Auth) {
  $scope.isLogged = Auth.isAuthenticated();
  this.modal = function() {
    var modalInstance = $modal.open({
      controller: 'loginController as modal',
      templateUrl: 'views/login.html',
      resolve: {
        logged: function () {
          return $scope.isLogged;
        }
      }
    });
    modalInstance.result.then(function(isLogged) {
      console.log(Auth.isAuthenticated());
      $scope.isLogged = Auth.isAuthenticated();
    }, function () {});
  };

  this.logout = function() {
    Auth.logout();
    $scope.isLogged = Auth.isAuthenticated();
  }
});
