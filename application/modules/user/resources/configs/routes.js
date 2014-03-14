define(function(require) {

  var module = require('module!router');

  module.config([
    '$routeProvider',
    function($routeProvider) {

      $routeProvider.when('/', {
        template: require('template!user:profile'),
        controller: 'user.profile-controller',
        reloadOnSearch: false,
        resolve: {
        }
      });

      $routeProvider.when('/test.html', {
        template: require('template!profile'),
        controller: 'user.test-controller',
        reloadOnSearch: false,
        resolve: {
        }
      });
    }
  ]);
});
