/**
 * Load all dependencies for module
 */
define(function(require) {

  require('module!@');


  require('service!factory/a');

  require('controller!profile-controller');

  /**
   * Include providers
   */
  require('service!providers/spinner');
});
