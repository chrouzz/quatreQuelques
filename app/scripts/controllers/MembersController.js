


angular.module('barmaddenApp').controller('MembersController', function ($scope, $resource) {
  var Members = $resource('/user/');
  $scope.members  = Members.query();

  $scope.message = "Members";
});


angular.module('barmaddenApp').controller('MemberController', function ($scope, $resource, $routeParams) {
  $scope.member = {};
  var Members = $resource('/user/:id');
  $scope.member  = Members.get( { id: $routeParams.id } , function () {
    console.log('found');
  });

  $scope.message = "Members";
});
