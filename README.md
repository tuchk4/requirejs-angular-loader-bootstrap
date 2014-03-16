angularjs-requirejs-bootstrap
=============================

Bootstrap for angularjs + requirejs application and module separating


All modules and module's components could be loaded using requirejs 
plugins [config, service, directive, controller, module, filter]

These plugins should be configured in requirejs.config({..}) under structure section

```javascript
requirejs.config({
  baseUrl: '/application',
  paths: {
    'text': '../bower_components/requirejs-text/text',
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
  }
});
```

