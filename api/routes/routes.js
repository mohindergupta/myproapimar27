'use strict';

module.exports = function(app) {
    var todoList = require('../controllers/controller');
    
    // list all the router

    app.route('/users/:loginID')
        .get(todoList.queryUser);
    app.route('/banks/:loginID')
        .get(todoList.queryBank);
}