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
    'tv4': '../bower_components/tv4/tv4',

    'base': 'plugins/base',
    'template': 'plugins/template',
    'controller': 'plugins/controller',
    'service': 'plugins/service',
    'module': 'plugins/module',
    'config': 'plugins/config',
    'directive': 'plugins/directive',
    'filter': 'plugins/filter'
  },
  structure: {
    baseUrl: '/application/modules/',
    module: {
      path: 'modules/{module}/{module}'
    },
    template: {
      path: 'modules/{module}/resources/views/{template}.{extension}',
      extension: 'html'
    },
    controller: {
      path: 'modules/{module}/controllers/{controller}'
    },
    service: {
      path: 'modules/{module}/src/{service}'
    },
    config: {
      path: 'modules/{module}/resources/configs/{config}'
    },
    directive: {
      path: 'modules/{module}/resources/directives/{directive}'
    },
    filter: {
      path: 'modules/{module}/resources/filter/{filter}'
    }
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


