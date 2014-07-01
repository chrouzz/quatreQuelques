barmadden
  .controller('LoginController', function($scope, $state, Auth) {
    $scope.errors = [];

    $scope.login = function() {
      $scope.errors = [];
      Auth.login($scope.user).success(function(result) {
        $state.go('user.message');
      }).error(function(err) {
        $scope.errors.push(err);
      });
    }
  });