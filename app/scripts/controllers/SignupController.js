angular.module('barmaddenApp').controller('SignupController', function ($scope, $resource, $location) {
  console.log("je rentre dans le signupController");
  $scope.message = "Signup";
  this.signup = {};
  var User = $resource('/api/User');
  $scope.user = new User({});
  $scope.save = function() {
  	$scope.user.$save(function () {
  		$location.path('/');
  	});
  };
});
