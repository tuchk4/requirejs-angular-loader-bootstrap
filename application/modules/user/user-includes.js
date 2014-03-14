/**
 * Load all dependencies for module
 */
define(function(require) {

  require('module!user');

  /**
   * Include directives
   */
  //require('/resources/directives/*');

  /**
   * Include factories
   */
  require('service!factory.a');

  /**
   * Include controllers
   */
  require('controller!profile-controller');
  require('controller!test-controller');

  /**
   * Require configs
   */
  require('config!main');
});
