Modules configuration
=====================
/**
 * Module name for automatic creation
 */
name: 'module-name',

/**
 * Modules that are extended by this module
 */
extends: [
    'some-module'                       // angular module
]

/**
 * Modules or libs pr other resources that should be required
 * before module creation
 */
dependencies: [
    'other-module'                     // requirejs.config.paths or use local path
],

/**
 * Components that will be required after module creation
 */
components: {
  controllers: ['module-controller'],   // module/{module-name}/controllers/module-controller.js
  directives: ['module-directive'],     // module/{module-name}/directives/module-directive.js
  filters: ['module-filter'],           // module/{module-name}/filters/module-filter.js
  services: ['module-service']          // module/{module-name}/services/module-service.js
},

/**
 * Scripts that will be required after module creation and requiring all components
 */
configure: [
    'routing',                          // module/{module-name}/configure/routing.js
    'resource-url-config'               // module/{module-name}/configure/resource-url-config.js
]



LOAD DEPENDENCIES (@dependencies)
    -> CREATE MODULE (@name, @extends)
    -> LOAD COMPONENTS (@components)
    -> CONFIGURE (@configure)
