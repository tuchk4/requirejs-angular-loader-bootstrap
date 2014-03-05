define(function(require) {
    var ng = require('angular');

    /**
     * Load modules
     */
    var modules = require('./modules');
    var ngModules = [];


    for (var i = 0; i < modules.length; i++){
        ngModules.push('modules/' + modules[i] + '/index');
    }

    /**
     * Require modules and Bootsrap
     */
    require(ngModules, function(){

        var name = 'my-app';

        ng.module(name, modules);

        ng.element(document)
            .ready(function() {
                var root = ng.element(document.querySelector('#' + name));

                ng.bootstrap(root, [name]);
            });
    });
});