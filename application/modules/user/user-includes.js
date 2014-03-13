/**
 * Load all dependencies for module
 */
define(function(require) {

  require('./user');

  /**
   * Include directives
   */
  //require('/resources/directives/*');

  /**
   * Include providers
   */
  //require('/src/providers/*');

  /**
   * Include controllers
   */
  require('./controllers/profile-controller');


  /**
   * Require configs
   */
  require('./resources/configs/main');
});
