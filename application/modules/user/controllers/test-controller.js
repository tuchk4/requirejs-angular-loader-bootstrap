define(function(require) {

  var module = require('modules/user/user');

  module.controller('user.test-controller', [
    '$scope',
    '$timeout',
    'app.provider.spinner',
    'user.factory.a',
    function(
      $scope,
      $timeout,
      spinner,
      a
      ) {

      $scope.greetings = 'test ' + a.get();
    }
  ]);
});
