'use strict';
let spec = require('../spec');
let templates = require('../templates');
module.exports = function(req, res) {
    res.set('Content-Type', 'text/css');
    res.send(templates.cssPlacements(spec));
};
