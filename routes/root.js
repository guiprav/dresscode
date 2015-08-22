'use strict';
let _ = require('lodash')
let spec = require('../spec');
let templates = require('../templates');
module.exports = function(req, res) {
    res.send(templates.home(_.merge(
        {
            dollPath: '/doll',
        },
        spec
    )));
};
