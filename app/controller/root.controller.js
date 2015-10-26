(function(ng){

  var CONTROLLER_NAME = 'mainApp.root.controller';

  ng.module('mainApp').controller(CONTROLLER_NAME, [
    '$log', '$scope', 'sliderService', _controller
  ]);


  function _controller($log, $scope, sliderService) {

    $scope.current = null;



    sliderService.download('start').then(function(data){
      $scope.current = data;
    })


    $scope.doOption = function(option) {

      switch(option.type) {
        case 'goTo':
          return _goTo(option.slide);
      }

    };


    function _goTo(slideId) {
      return sliderService.download(slideId).then(function(data){
        $scope.current = data;
      })
    }
  }

})(angular);