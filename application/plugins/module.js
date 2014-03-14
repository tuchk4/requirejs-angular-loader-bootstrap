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

      if (!name){
        throw new Error('Module name should be defined');
      }


      // TODO: change replace at other modules with regexp -g
      var path = structure.module.path
        .replace(/\{module\}/g, name);

      req([path], function(value){
        onload(value);
      });

    }
  }
});
