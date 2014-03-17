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
    /**
     * requirejs.config.baseUrl + structure.prefix
     *
     * requirejs.config.baseUrl = '/application'
     * structure.prefix = modules/{module}
     * {module} - module name
     *
     * result:
     *
     * application/modules/{module}
     */
    prefix: 'modules/{module}',

    /**
     * require
     */
    module: {
      path: '/{module}'
    },

    /**
     * if current module - foo:
     *
     * require('template!boo')
     * require('template!foo:boo')
     */
    template: {
      path: '/resources/views/{template}.{extension}',
      extension: 'html'
    },
    controller: {
      path: '/controllers/{controller}'
    },
    service: {
      path: '/src/{service}'
    },
    config: {
      path: '/resources/configs/{config}'
    },
    directive: {
      path: '/resources/directives/{directive}'
    },
    filter: {
      path: '/resources/filter/{filter}'
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


