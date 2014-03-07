define(function(){
  var module = angular.module('app');

  module.run([
    '$rootScope',
    function($rootScope){
      $rootScope.loaded = true;
      $rootScope.spinner = false;
    }
  ]);
});