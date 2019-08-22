'use strict';

class Home {
    constructor() {

    }

    home(ctx) {
        ctx.body = {
            msg: 'This app is named Sow base on Koa.js'
        };
    } 
}

module.exports = Home;
