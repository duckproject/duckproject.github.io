(function(ng){
  'use strict';

  var SERVICE_NAME = 'sliderService';


  ng.module('mainApp').service(SERVICE_NAME, [ '$log',
    '$http', 'jQuery', '$q', _service
  ]);


  function _service($log, $http, jQuery, $q) {
    var $this = this;

    //Downloads an slide
    $this.download = function(slideId) {

      var sp = $http({
        'url' : '/sliders/' + slideId + '.xml',
        'method': 'GET'
      });

      var $$q = $q.defer();
      sp.success(function(data) {
        $$q.resolve(_processData(data));
      });


      return $$q.promise;

    };


    //Process data that is retrieved from server
    function _processData(data) {
      var $slide = jQuery(data);

      var result = {
        'text': jQuery('text', $slide).text(),
        'options': []
      };

      jQuery('option', $slide).each(function(option){
        var $option = jQuery(this);

        result.options.push({
          'slide': $option.attr('slide'),
          'value': $option.text()
        });
      });

      return result;
    }
  }

})(angular);