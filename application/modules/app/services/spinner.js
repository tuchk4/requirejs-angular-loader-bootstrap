define(function(){

  var module = angular.module('app');

  module.provider('app.spinner', function(){
    var key = 'spinner';

    this.$get = [
      '$rootScope',
      function($rootScope){
        return {
          show: function(){
            $rootScope[key] = true;
          },
          hide: function(){
            $rootScope[key] = false;
          }
      }
    }];
  });
});