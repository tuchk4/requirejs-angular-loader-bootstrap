define(function(require) {

  var module = require('module!@');

  module.config(['$locationProvider',
    function($locationProvider) {
      $locationProvider.html5Mode(true);
    }
  ]);
});
