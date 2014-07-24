angular.module('barmaddenApp').controller('ProfileController', function ($scope, $resource, $routeParams, Auth, $location) {

  var isLogged = Auth.isAuthenticated();

  if (!isLogged){
  	$location.path('/login/');
  }
  var temp = JSON.parse(isLogged);
  $scope.id = temp.user[0].id;;
  console.log($scope.id);
  console.log($routeParams);
  console.log(typeof $routeParams);
  // if ($scope.id.toString().indexOf($routeParams.id) === -1 ){
  // 	$location.path('/login/');
  // }
  $scope.member = {};
  var Members = $resource('/user/:id');
  $scope.member  = Members.get( { id: $scope.id } , function () {
  });
});
