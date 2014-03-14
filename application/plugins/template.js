define(function(){
  var map = {};

  return {

    write: function (pluginName, moduleName, write) {

      if (map.hasOwnProperty(pluginName)){
        var template = map[pluginName];

        write("define('" + pluginName + "!" + moduleName  +
          "', function () { return '" + template + "';});\n")
      }
    },

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

      if (!structure.hasOwnProperty('template')
            && (!structure.template.hasOwnProperty('path')
            && !structure.template.hasOwnProperty('extension'))){
        throw new Error('Structure for template should be defined');
      }

      var include = name.split(':');

      var module, template;

      if (include.length == 1){
        template = include[0];
        var current = req.toUrl('.');
        var baseUrl = structure.baseUrl;

        module = current.replace(new RegExp('^.*'+baseUrl), '').split('/')[0];;

      } else if (include.length == 2) {
        module =  include[0];
        template =  include[1];
      } else {
        throw new Error('Invalid require path format for template plugin')
      }

      var path = structure.template.path
        .replace('{module}', module)
        .replace('{template}', template)
        .replace('{extension}', structure.template.extension);

      req(['text!' + path], function(value){
        map[name] = value;
        onload(value);
      });
    }
  }
});
