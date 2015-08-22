#!/usr/bin/env node
'use strict';
let express = require('express');
let routes = require('./routes');
let app = express();
let port = process.env.PORT || 3000;
routes.register(app);
app.listen(port);
console.log("Listening on port", port + ".");
