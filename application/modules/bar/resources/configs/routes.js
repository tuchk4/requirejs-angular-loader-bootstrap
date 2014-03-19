define(function(require) {

  return function(module){
    var module = require('module!@');

    module.config([
      '$routeProvider',
      function($routeProvider) {


        $routeProvider.when('/bar/beer', {
          template: require('template!beer'),
          controller: 'bar.controllers.beer',
          resolve: {
          }
        });
      }
    ]);
  }
});
