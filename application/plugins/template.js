define(['base'], function(base){
  return {
    load: function (name, req, onload, config) {

      base.validate(config);

      var structure = config.structure;

      base.validateTemplate(structure);

      var items = base.path(name, structure, req.toUrl('.'));

      var path = structure.template.path
        .replace('{module}', items.module)
        .replace('{template}', items.item)
        .replace('{extension}', structure.template.extension);

      req(['text!' + path], function(value){
        onload(value);
      });
    }
  }
});
