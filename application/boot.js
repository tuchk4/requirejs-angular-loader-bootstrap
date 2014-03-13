requirejs.config({
  baseUrl: '/application',
  paths: {
    'angular': '../bower_components/angular/angular',
    'angular-route': '../bower_components/angular-route/angular-route',
    'angular-cache': '../bower_components/angular-cache/dist/angular-cache',
    'angular-resource': '../bower_components/angular-resource/angular-resource',
    'text': '../bower_components/requirejs-text/text',
    'moment': '../bower_components/moment/moment',
    'jquery': '../bower_components/jquery/jquery',
    'tv4': '../bower_components/tv4/tv4'
  },
  shim: {
    'angular': {
      exports: 'angular'
    },
    'angular-route': {
      deps: ['angular']
    },
    'angular-cache': {
      deps: ['angular']
    },
    'angular-resource': {
      deps: ['angular']
    }
  }
});

console.time('application loading');
require(['app']);

