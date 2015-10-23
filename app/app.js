(function(ng, jQuery) {
  'use strict';


  ng.module('mainApp',[
    'angular-loading-bar',
    //'xml'
  ]);

  ng.module('mainApp').constant('jQuery', jQuery);


  ng.module('mainApp').config(['cfpLoadingBarProvider', cfpLoadingBarFn]);
  //ng.module('mainApp').config(['x2jsProvider', x2jsProviderFn]);
  //ng.module('mainApp').config(['$httpProvider', httpProviderFn]);

  function cfpLoadingBarFn(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = true;
    cfpLoadingBarProvider.includeBar  = true;
  }

  function x2jsProviderFn(x2jsProvider) {

  }

  function httpProviderFn($httpProvider) {
    $httpProvider.interceptors.push('xmlHttpInterceptor');
  }


})(angular, jQuery);