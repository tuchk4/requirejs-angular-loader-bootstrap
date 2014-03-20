define(function(require){
  return function(module){
    module.config(['$locationProvider',
      function($locationProvider) {
        $locationProvider.html5Mode(true);
      }
    ]);
  }
});
