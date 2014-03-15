define(function(){
  return {
    validate : function(config){

      if (!config.hasOwnProperty('structure')){
        throw new Error('Structure should be defined');
      }

      var structure = config.structure;

      if (!structure.hasOwnProperty('module')
            && !structure.module.hasOwnProperty('path')
            && !structure.hasOwnProperty('baseUrl')){

        throw new Error('Modules structure should be defined');
      }
    },

    validateTemplate: function(structure){

      if (!structure.hasOwnProperty('template')
            && (!structure.template.hasOwnProperty('path')
            && !structure.template.hasOwnProperty('extension'))){

        throw new Error('Structure for template should be defined');
      }
    },

    path: function(name, structure, url){
      var include = name.split(':');

      var module, item;

      if (include.length == 1){
        item = include[0];
        var current = url;
        var baseUrl = structure.baseUrl;

        module = current.replace(new RegExp('^.*'+baseUrl), '').split('/')[0];;

      } else if (include.length == 2) {
        module =  include[0];
        item =  include[1];
      } else {
        throw new Error('Invalid require path format for template plugin')
      }

      return {
        module: module,
        item: item
      }
    }
  }
});