(function(ng, jQuery, marked) {
  'use strict';


  ng.module('mainApp',[
    'angular-loading-bar',
    'ngSanitize'
  ]);

  ng.module('mainApp').constant('jQuery', jQuery);
  ng.module('mainApp').constant('$marked', marked);


  ng.module('mainApp').config(['cfpLoadingBarProvider', _cfpLoadingBarFn]);

  function _cfpLoadingBarFn(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = true;
    cfpLoadingBarProvider.includeBar  = true;
  }



})(angular, jQuery, marked);