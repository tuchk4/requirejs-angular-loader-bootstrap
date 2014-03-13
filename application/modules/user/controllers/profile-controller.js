define(function(require) {

  var module = require('modules/user/user');

  module.controller('user.profile-controller', [
    '$scope',
    '$timeout',
    'app.provider.spinner',
    function(
        $scope,
        $timeout,
        spinner
        ) {
      spinner.show();

      var phrases = {
        greetings: 'Hello {name}!'
      };

      $timeout(function() {
        spinner.hide();
        $scope.greetings = phrases.greetings.replace('{name}', (new Date()).getUTCMilliseconds());
      },1000);
    }
  ]);
});
