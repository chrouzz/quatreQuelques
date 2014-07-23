barmadden.controller('NavbarController', function($modal, $scope) {
  this.message = 'It works!'
  this.modal = function() {
    $modal.open({
      controller: 'loginController as modal',
      templateUrl: 'views/login.html'
    });
  };
})
