angular.module('barmaddenApp').controller('SearchMembersController', function ($scope, $resource, $routeParams, $location) {
  
  this.searchResult = {};

  $scope.searchMembers = function () {

  	console.log(this.searchResult);

  	var age1 = this.searchResult.age1;
  	var age2 = this.searchResult.age2;
  	var sortBy = this.searchResult.sortBy;

  	//$scope.member = {};
    var members = $resource('/searchmembers', this.searchResult);
 
  	var member  = members.get(function () {
  		console.log(member.username);
  	});

  };

});