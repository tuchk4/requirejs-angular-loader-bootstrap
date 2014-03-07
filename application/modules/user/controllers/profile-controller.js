define(function() {
    var module = angular.module('user');

    module.controller('user.profile-controller', [
        '$scope',
        function($scope){
            $scope.name = (new Date).getUTCMilliseconds();
        }
    ]);
});