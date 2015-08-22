'use strict';
exports.register = function(app) {
    app.get('/', require('./root'));
    app.get('/placements.css', require('./placements'));
};
