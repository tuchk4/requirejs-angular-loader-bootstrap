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

      if (!structure.hasOwnProperty('directive')
        && !structure.directive.hasOwnProperty('path')){
        throw new Error('Structure for directive should be defined');
      }

      var include = name.split(':');

      var module, directive;

      if (include.length == 1){
        directive = include[0];
        var current = req.toUrl('.');
        var baseUrl = structure.baseUrl;

        module = current.replace(new RegExp('^.*'+baseUrl), '').split('/')[0];

      } else if (include.length == 2) {
        module =  include[0];
        directive = include[1];
      } else {
        throw new Error('Invalid require path format for controller plugin')
      }

      var path = structure.directive.path
        .replace('{module}', module)
        .replace('{directive}', directive);

      req([path], function(value){
        onload(value);
      });

    }
  }
});
