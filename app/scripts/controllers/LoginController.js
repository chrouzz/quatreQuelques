barmadden.controller('demoController', function($modal) {
  this.message = 'It works!'
  this.modal = function() {
    $modal.open({
      controller: 'modalController as modal',
      templateUrl: 'views/login.html'
    });
  };
})
.controller('modalController', function($modalInstance) {
  this.modalText = 'Modal Text'
  this.cancel = function() {
    $modalInstance.dismiss();
  }
})

