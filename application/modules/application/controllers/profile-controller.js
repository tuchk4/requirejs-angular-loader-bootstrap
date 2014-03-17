define(function(require) {

  var module = require('module!@');

  module.controller('application.profile-controller', [
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
      spinner.show();

      var phrases = {
        greetings: 'Hello from application {name}!'
      };

      $timeout(function() {
        spinner.hide();

        $scope.greetings = phrases.greetings.replace('{name}', (new Date()).getUTCMilliseconds());
      });
    }
  ]);
});
