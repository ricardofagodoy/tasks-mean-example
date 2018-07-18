module.exports = function(app) {

    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    var index = require('../controllers/index.server.controller');
    app.get('/', index.render);
};
