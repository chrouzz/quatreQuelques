angular.module('barmaddenApp').controller('MessagesController', function ($scope, $resource, $routeParams, $cookieStore, $location) {
  
  this.tab = 1;
  this.mailBox = {userId: $cookieStore.get('id'), boxType: 'inbox'};
  var Message = $resource('/messages', this.mailBox);
  this.storedMessages  = Message.query();

  this.selectTab = function(setTab) {
    this.tab = setTab;
  };

  this.isSelected = function(checkTab) {
    return this.tab === checkTab;
  };

  //var Message = $resource('/message');
  //$scope.message = new Message({});

  this.loadMessageTitles = function (boxType) {
    this.conversationOpened = 0;
    this.mailBox = {userId: $cookieStore.get('id'),
                    boxType: boxType};
    var Message = $resource('/messages', this.mailBox);
    this.storedMessages  = Message.query(); //(function () {
      //console.log($scope.storedMessages);
    //});
    
  };

  this.loadConversation = function (contactId) {
    this.conversationOpened = 1;
    this.conversation = {userId: $cookieStore.get('id'),
                         contactId: contactId};
    var Conversation = $resource('/messages/conversation', this.conversation);
    this.storedConversation  = Conversation.query(); //(function () {
      //console.log($scope.storedMessages);
    //});
    
  };

  /*$scope.send = function (message) {

    var title = this.message.title;
    var message = this.message.message;
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
      $scope.message.receiverId = 1000;
      $scope.message.title = title;
      $scope.message.message = message;
      console.log($scope.message);
      $scope.message.$save(function () {
        $location.path('/');
      });

    }

  };*/

});