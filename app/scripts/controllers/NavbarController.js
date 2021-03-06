barmadden.controller('NavbarController', function($modal, $scope, Auth, toastr) {
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
      
      $scope.isLogged = Auth.isAuthenticated();
      var temp = JSON.parse($scope.isLogged);
      $scope.id = temp.user[0].id;
    }, function () {});
  };

  this.logout = function() {
    Auth.logout();
    toastr.error('Bye bye, hope you come back soon.', 'You are successfully logout.');
    $scope.isLogged = Auth.isAuthenticated();
    
  }
});
