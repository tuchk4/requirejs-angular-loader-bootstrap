define(function(require){

  var module = require('module!@');

  module.factory('application.factory.greeter', function(){
    return {
      sayHello : function(){
        return 'Hello world!'
      },

      sayHelloToMe: function(name){
        return 'Hello {name}! How are you?'.replace('{name}', name);
      }
    }
  })
});