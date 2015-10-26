(function(ng){
  'use strict';

  var SERVICE_NAME = 'slidesService';


  ng.module('mainApp').service(SERVICE_NAME, [ '$log',
    '$http', 'jQuery', '$q', '$marked', '$sce', _service
  ]);


  function _service($log, $http, jQuery, $q, $marked, $sce) {
    var $this = this;

    //Downloads an slide
    $this.download = function(slideId) {

      var sp = $http({
        'url' : '/slides/' + slideId + '.slide',
        'method': 'GET'
      });

      var $$q = $q.defer();
      sp.success(function(data) {
        $$q.resolve(_processSlide(data));
      });


      return $$q.promise;

    };


    //Process data that is retrieved from server
    function _processSlide(data) {

      var optionsIdx = data.indexOf('<slideOptions>');

      var text = data.substr(0, optionsIdx);
      var options = data.substr(optionsIdx);

      text = _processText(text.trim());

      var $slideOptions = jQuery(options);
      var result = {
        'text': $sce.trustAsHtml(text),
        'options': []
      };

      jQuery('option', $slideOptions).each(function(option){
        var $option = jQuery(this);

        var type = $option.attr('type');
        switch(type) {
          case 'goTo':
            result.options.push({
              'slide': $option.attr('slide'),
              'value': $option.text(),
              'type': 'goTo'
            });
            break;
        }
      });

      return result;
    }

    function _processText(text) {
      return $marked(text, {

      });
    }
  }

})(angular);