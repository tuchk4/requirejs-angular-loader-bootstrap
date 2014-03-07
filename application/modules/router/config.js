define(function() {
    return {
      name: 'router',
      extends: ['ngRoute'],
      dependencies: ['angular-route'],

      configure: ['html5Mode']
    }
});