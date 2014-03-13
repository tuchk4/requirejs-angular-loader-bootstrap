define(function(require) {

  var module = require('modules/router/router');

  module.config(['$locationProvider',
    function($locationProvider) {
      $locationProvider.html5Mode(true);
    }
  ]);
});
