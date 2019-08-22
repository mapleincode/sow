'use strict';

class User {
    async _userData() {
        const user = this.service.get('user');
        return user.user();
    }
    async login() {
        this.ctx.body = {
            msg: 'login success',
            query: this.ctx.query,
            data: await this._userData()
        };
    }
};

module.exports = User;
