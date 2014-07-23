barmadden.controller('loginController', function($modalInstance, $scope, $state, Auth) {
  this.cancel = function() {
    $modalInstance.dismiss();
  };
  // this.user = {};
  // $scope.errors = [];

  this.login = function() {
    console.log("enter login controller");
    $scope.logged= false;
    $scope.errors = [];
    Auth.login(this.user).success(function(result) {
      $scope.logged = true;
      console.log(this.logged);
      $state.go('user.messages');
    }).error(function(err) {
      $scope.errors.push(err);
    });
  };
});
