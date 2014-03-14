define(function(require) {

  var module = require('module!router');

  module.config(['$locationProvider',
    function($locationProvider) {
      $locationProvider.html5Mode(true);
    }
  ]);
});
