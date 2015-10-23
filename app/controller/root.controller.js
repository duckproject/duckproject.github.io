(function(ng){

  var CONTROLLER_NAME = 'mainApp.root.controller';

  ng.module('mainApp').controller(CONTROLLER_NAME, [
    '$log', '$scope', 'sliderService', _controller
  ]);


  function _controller($log, $scope, sliderService) {

    $scope.current = null;



    sliderService.download(1).then(function(data){
      $scope.current = data;
    })

    $scope.goTo = function(slideId) {
      sliderService.download(slideId).then(function(data){
        $scope.current = data;
      })
    };
  }

})(angular);