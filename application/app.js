define(['angular', 'app-config'], function(ng, config) {

    /**
     *
     * @type {Object}
     */
    var paths = config.paths;

    /**
     *
     * @type {Object}
     */
    var schema = config.modules.schema;

    /**
     *
     * @type {Array}
     */
    var modules = config.modules.list;


  var path = {
    module: function(name){
      return paths.module.replace(/\{name\}/g, name);
    },

    config: function(name){
      return paths.config.replace('{name}', name);
    }
  };

  // TODO:
  var validate = function(config)
  {
    if (!config.hasOwnProperty('name')){
      throw new Error('Config is not valid');
    }
  }


  var load = function(modules)
  {
    var paths = [];
    for (var i = 0; i < modules.length; i++){
      paths.push(path.config(modules[i]));
    }

    require(paths, loadDependencies);
  };

  var loadDependencies = function()
  {
    var dependencies = [],
      configs = arguments;

    for (var i = 0; i < configs.length; i++){

      validate(configs[i]);

      if (configs[i].hasOwnProperty('dependencies')){
        dependencies = dependencies.concat(configs[i].dependencies);
      }
    }
    require(dependencies, function(){
      createModules(configs);
    });
  }

  var createModules = function(configs)
  {
    configs = configs || arguments;

    for (var i = 0; i < configs.length; i++){
      var extend = [];

      if (configs[i].hasOwnProperty('extends')){
        extend = configs[i].extends;
      }

      ng.module(configs[i].name, extend);
    }

    loadComponents(configs);
  }

  // TODO: optimize this
  var loadComponents =  function(configs)
  {
    var components = [];
    var configurations = [];

    configs = configs || arguments;

    for (var i = 0; i < configs.length; i++){

      var name = modules[i];

      if (!angular.isObject(configs[i])){
        throw new Error('Nov valid config for module: ' + modules[i]);
      }

      if (configs[i].hasOwnProperty('components')){
        var includes = configs[i].components;


        for (key in includes){
          if (includes.hasOwnProperty(key) && schema.indexOf(key)){

            components = components.concat(includes[key].map(function(dependency){
              return 'modules/' + name + '/' + key + '/' + dependency
            }));
          }

        }
      }

      if (configs[i].hasOwnProperty('configure')){
        configurations = configurations.concat(configs[i]['configure'].map(function(config){
          return 'modules/' + name + '/configure/' + config;
        }));

      }
    }

    require(components, function(){
      require(configurations, bootstrap);
    });
  };

  var bootstrap = function()
  {
    console.timeEnd('Modules loaded');

    var name = config.name;

    ng.module(name, modules);

    ng.element(document)
      .ready(function() {
        var root = ng.element(document.querySelector('#' + name));

        ng.bootstrap(root, [name]);
      });
  };

  console.time('Modules loaded');
  load(modules);
});