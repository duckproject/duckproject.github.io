(function(ng){

  var CONTROLLER_NAME = 'mainApp.root.controller';

  ng.module('mainApp').controller(CONTROLLER_NAME, [
    '$log', '$scope', 'slidesService', _controller
  ]);


  function _controller($log, $scope, slidesService) {

    $scope.current = null;



    slidesService.download('start').then(function(data){
      $scope.current = data;
    })


    $scope.doOption = function(option) {

      switch(option.type) {
        case 'goTo':
          return _goTo(option.slide);
      }

    };


    function _goTo(slideId) {
      return slidesService.download(slideId).then(function(data){
        $scope.current = data;
      })
    }
  }

})(angular);