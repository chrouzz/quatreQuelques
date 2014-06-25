


angular.module('barmaddenApp').controller('MembersController', function ($scope, $resource) {
  var Members = $resource('/user');
  $scope.members  = Members.query();

  $scope.message = "Members";
});
