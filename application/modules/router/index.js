define(function(require) {
    var ng = require('angular');

    require('angular-route');

    var module = ng.module('router', [
        'ngRoute'
    ]);

    module.config(['$locationProvider',
        function($locationProvider) {
            $locationProvider.html5Mode(true);
        }
    ]);

    return module;
});