define(function(require) {
    var module = require('../user');

    module.controller('user.profile-controller', [
        '$scope',
        function($scope){
            $scope.name = (new Date).getUTCMilliseconds();
        }
    ]);
});