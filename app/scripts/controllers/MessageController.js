angular.module('barmaddenApp').controller('MessageController', function ($scope, $resource, $routeParams, $cookieStore, $location) {
  
  this.message = {};
  //var Message = $resource('/message');
  //$scope.message = new Message({});


  $scope.send = function (message) {

    var title = this.message.title;
    var message = this.message.message;
    var receiverId = this.message.receiverId;
    console.log(title);
    console.log(message);

    if ($cookieStore.get('login') === 0 || $cookieStore.get('login') === undefined) {
      
      $location.path('/login/');
    
    //} else if ($cookieStore.get('id').toString().indexOf($routeParams.id) === -1 ) {
      
    //  $location.path('/login/');
    
    } else {

      var Message = $resource('/message');
      $scope.message = new Message({});
      $scope.message.senderId = $cookieStore.get('id');
      $scope.message.receiverId = receiverId;
      $scope.message.title = title;
      $scope.message.message = message;
      console.log($scope.message);
      $scope.message.$save(function () {
        $location.path('/');
      });

    }

  };

});