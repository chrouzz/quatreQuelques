barmadden.controller('loginController', function($modalInstance, $scope, $state, Auth) {
  this.cancel = function() {
    $modalInstance.dismiss();
  };
  // this.user = {};
  // $scope.errors = [];

  this.login = function() {
    console.log("enter login controller");
    $scope.isLogged= false;
    Auth.login(this.user).success(function(result) {
      console.log("login successful");
      $scope.isLogged= true;
      $modalInstance.close($scope.isLogged);
    }).error(function(err) {
      $modalInstance.close($scope.isLogged);
    });
  };

  
});
