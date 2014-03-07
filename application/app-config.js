define(function() {
  return {
    name: 'my-app',
    paths: {
      module: 'modules/{name}/{name}',
      config: 'modules/{name}/Config'
    },
    modules: {
     schema: [
       'services',
       'directives',
       'filters',
       'controllers',
       'libs'
     ],
     list: [
       'router',
       'user'
      ]
    }
   }
});
