'use strict';
let templates = require('../templates');
module.exports = function(req, res) {
    res.send(templates.home());
};
