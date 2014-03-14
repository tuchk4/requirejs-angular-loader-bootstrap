define(function(){
  return {

    load: function (name, req, onload, config) {

      if (!config.hasOwnProperty('structure')){
        throw new Error('Structure should be defined');
      }

      var structure = config.structure;

      if (!structure.hasOwnProperty('module')
        && !structure.module.hasOwnProperty('path')
        && !structure.hasOwnProperty('baseUrl')){
        throw new Error('Module for template should be defined');
      }

      if (!structure.hasOwnProperty('controller')
        && !structure.config.hasOwnProperty('path')){
        throw new Error('Structure for controller should be defined');
      }

      var include = name.split(':');

      var module, controller;

      if (include.length == 1){
        controller = include[0];
        var current = req.toUrl('.');
        var baseUrl = structure.baseUrl;

        module = current.replace(new RegExp('^.*'+baseUrl), '').split('/')[0];

      } else if (include.length == 2) {
        module =  include[0];
        controller = include[1];
      } else {
        throw new Error('Invalid require path format for controller plugin')
      }

      var path = structure.controller.path
        .replace('{module}', module)
        .replace('{controller}', controller);

      req([path], function(value){
        onload(value);
      });

    }
  }
});
