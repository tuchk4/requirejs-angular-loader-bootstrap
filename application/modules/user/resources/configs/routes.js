define(function(require) {

  var module = require('modules/router/router');

  module.config([
    '$routeProvider',
    function($routeProvider) {
      $routeProvider.when('/', {
        template: require('text!../views/profile.html'),
        controller: 'user.profile-controller',
        reloadOnSearch: false,
        resolve: {

        }
      });
    }
  ]);
});
