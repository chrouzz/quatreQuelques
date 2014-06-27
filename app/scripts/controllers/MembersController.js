


angular.module('barmaddenApp').controller('MembersController', function ($scope, $resource) {
  var Members = $resource('/user');
  console.log(Members);
  $scope.members  = Members.query();

  $scope.message = "Members";
});
