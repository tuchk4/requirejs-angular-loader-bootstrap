define(['base'], function(base){
  return {

    normalize: function (name, normalize) {

      if (name.split(':').length == 1){

        var config = requirejs.s.contexts._.config;
        var module = base.getCurrentModule(config, config.baseUrl  + normalize('.'));

        if (name == '@'){
          return module;
        } else {
          return module + ':' + name;
        }

      } else {
        return name;
      }
    },

    load: function (name, req, onload, config) {

      base.validate(config, 'module');

      var structure = config.structure;

      var module = base.value(name);

      if (module == ''){
          module = base.getCurrentModule(config, req.toUrl('.'));
      }

      var path = structure.module.path
        .replace('{module}', module);

      var reqPath = base.path(path, config, req.toUrl('.'));

      req([reqPath], function(value){
        onload(value);
      });
    }
  }
});
