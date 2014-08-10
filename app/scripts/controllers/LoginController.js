barmadden.controller('loginController', function($modalInstance, $scope, $state, Auth, toastr) {
  this.cancel = function() {
    $modalInstance.dismiss();
  };
  // this.user = {};
  // $scope.errors = [];

  this.login = function() {
    console.log("enter login controller");
    $scope.isLogged= false;
    Auth.login(this.user).success(function(result) {
      toastr.success('Welcome in our world','You are succesfully logged.');
      $scope.isLogged= true;
      $modalInstance.close($scope.isLogged);
    }).error(function(err) {
      // toastr.error('Welcome in our world','Login failed, tried again or <a href='#signup'> register </a>.');
      $modalInstance.close($scope.isLogged);
    });
  };

  
});
