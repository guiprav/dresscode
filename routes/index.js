'use strict';
exports.register = function(app) {
    app.get('/', require('./root'));
};
