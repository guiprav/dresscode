'use strict';
let glob = require('glob');
let _ = require('lodash');
let readFileSync = require('./readFileSync');
module.exports = function(pattern, options) {
    options = options || {};
    options.glob = options.glob || {};
    options.glob.nodir = true;
    options.readFile = options.readFile || {};
    let matches = glob.sync(pattern, options.glob);
    return _.zipObject(matches.map(function(path) {
        return [
            path,
            readFileSync(path, options.readFile),
        ];
    }));
};
