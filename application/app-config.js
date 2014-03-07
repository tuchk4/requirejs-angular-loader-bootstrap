define(function() {
  return {
    /**
     * Application name
     * also there should be element with same ID for manual ng bootstraping
     */
    name: 'my-app',

    /**
     * Modules paths
     */
    paths: {
      config: 'modules/{name}/config'
    },

    modules: {
    /**
     * Schema for module components loading
     */
     schema: [
       'services',
       'directives',
       'filters',
       'controllers',
       'libs'
     ],

    /**
     * List of modules that should be included
     */
     list: [
       'router',
       'user'
      ]
    }
   }
});
