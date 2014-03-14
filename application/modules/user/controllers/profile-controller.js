define(function(require) {

  var module = require('modules/user/user');

  module.controller('user.profile-controller', [
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
        greetings: 'Hello {name}!'
      };

      $timeout(function() {
        spinner.hide();

        a.set('new a');

        $scope.greetings = phrases.greetings.replace('{name}', (new Date()).getUTCMilliseconds());
        $scope.greetings = a.get();
      });
    }
  ]);
});
