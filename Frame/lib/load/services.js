'use strict';

const path = require('path');

// const servicesMap = {};
// const classMap = {};

const root = path.resolve(__dirname, '../../../app/services/');

function getClass(Service, ctx) {
    const service = new Service();
    service.ctx = ctx;
    service.service = {
        get: function(filename) {
            get(filename, ctx);
        }
    };
    return service;
}

function get(filename, ctx) {
    const Service = require(path.join(root, filename));
    return getClass(Service, ctx);
}

exports.get = get;