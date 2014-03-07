define(function(){
  var module = angular.module('router');

  module.config(['$locationProvider',
    function($locationProvider) {
      $locationProvider.html5Mode(true);
    }
  ]);
});