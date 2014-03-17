define(function(require) {

  var module = require('module!@');

  module.config([
    '$routeProvider',
    function($routeProvider) {

      $routeProvider.when('/', {
        template: require('template!profile'),
        controller: 'user.profile-controller',
        reloadOnSearch: false,
        resolve: {
        }
      });

      $routeProvider.when('/test.html', {
        template: require('template!profile'),
        controller: 'application.profile-controller',
        reloadOnSearch: false,
        resolve: {
        }
      });
    }
  ]);
});
