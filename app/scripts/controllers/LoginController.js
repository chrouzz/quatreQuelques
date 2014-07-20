barmadden.controller('demoController', function($modal) {
  this.message = 'It works!'
  this.modal = function() {
    $modal.open({
      controller: 'modalController as modal',
      templateUrl: 'views/login.html'
    });
  };
})
.controller('modalController', function($modalInstance, $scope, $state, Auth) {
  this.cancel = function() {
    $modalInstance.dismiss();
  };
  // this.user = {};
  // $scope.errors = [];

  this.login = function() {
    console.log("enter login controller");
    $scope.errors = [];
    Auth.login(this.user).success(function(result) {
      $state.go('user.messages');
    }).error(function(err) {
      $scope.errors.push(err);
    });
  };
});
