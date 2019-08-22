'use strict';

const Module = require("module");
const Sow = require('./Frame');

const _resolveFilename = Module._resolveFilename.bind(Module);

Module._resolveFilename = function(request, parent) {
    if(request.toLowerCase() === 'sow') {
        request = `${__dirname}/Frame`;
    }
    return _resolveFilename(request, parent);
}