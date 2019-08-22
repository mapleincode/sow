'use strict';

const path = require('path');

const baseDir = path.resolve('./app/', 'controllers');
const Services = require('./services');

function getClass(Service) {
    const obj = {};

    const keys = Object
        .getOwnPropertyNames(Service.prototype)
        .filter(key => key !== 'constructor');

    for (const key of keys) {
        obj[key] = function (ctx) {
            const service = new Service();
            service.ctx = ctx;
            service.service = {
                get: function(filename) {
                    return Services.get(filename, ctx);
                }
            };
            return Service.prototype[key].bind(service)(...arguments);
        }
    }

    return obj;
}

exports.get = function(path) {
    const User = require(baseDir + '/' + path);

    return getClass(User);
}