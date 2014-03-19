define(function(require) {

  return function(module){
    var module = require('module!@');

    module.config([
      '$routeProvider',
      function($routeProvider) {

        $routeProvider.when('/', {
          template: require('template!home'),
          controller: 'foo.controllers.home',
          resolve: {
          }
        });

        $routeProvider.when('/foo/hello', {
          template: require('template!hello'),
          controller: 'foo.controllers.hello',
          resolve: {
          }
        });
      }
    ]);
  }
});
