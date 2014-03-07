define(function() {
    var module = angular.module('user');

    module.controller('user.profile-controller', [
        '$scope',
        '$timeout',
        'app.spinner',
        function(
          $scope,
          $timeout,
          spinner
        ){
            spinner.show();

            $timeout(function(){
              spinner.hide();
              $scope.name = (new Date).getUTCMilliseconds();
            },1000);
        }
    ]);
});