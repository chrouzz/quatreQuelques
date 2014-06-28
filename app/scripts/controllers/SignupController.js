angular.module('barmaddenApp').controller('SignupController', function ($scope, $resource, $location) {
  $scope.message = "Signup";
  this.signup = {};
  var User = $resource('/user');
  $scope.user = new User({});
  $scope.save = function() {
  	$scope.user.$save(function () {
  		$location.path('/');
  	});
  };
});
