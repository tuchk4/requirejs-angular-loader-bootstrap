define(function(require){
  var module = require('module!@');

  module.service('application.factory.a', [function(){


      var a = 'd';

      this.get = function(){
        return a;
      };

      this.set = function(b){
        a = b;
      }

    }]
  );
});