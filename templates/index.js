'use strict';
let baseName = require('path').basename;
let _ = require('lodash');
let hbs = require('handlebars');
let readGlobSync = require('../readGlobSync');
_.each(readGlobSync(__dirname + '/*.hbs'), function(sourceCode, path) {
    let name = baseName(path, '.hbs');
    exports[name] = hbs.compile(sourceCode);
});
