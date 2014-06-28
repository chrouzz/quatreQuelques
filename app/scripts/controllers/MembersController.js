


angular.module('barmaddenApp').controller('MembersController', function ($scope, $resource) {
  var Members = $resource('/user/');
  $scope.members  = Members.query();

  $scope.message = "Members";
});


angular.module('barmaddenApp').controller('MemberController', function ($scope, $resource, $routeParams, $cookieStore, $location) {

  if ($cookieStore.get('login') === 0 || $cookieStore.get('login') === undefined){
  	$location.path('/login/');
  }

  if ($cookieStore.get('id').toString().indexOf($routeParams.id) === -1 ){
  	$location.path('/login/');
  }
  $scope.member = {};
  var Members = $resource('/user/:id');
  $scope.member  = Members.get( { id: $routeParams.id } , function () {
  });
});
