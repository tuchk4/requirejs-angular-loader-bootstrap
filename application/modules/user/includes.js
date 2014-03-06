define(function(require) {
    var module = require('./user');

    // require controllers
    require('./controllers/profile-controller');

    // require routes
    require('./bootstrap/router');

    return module;
});