'use strict';

class User {
    user() {
        const query = this.ctx.query;
        return { user: 'Bob', controllerQuery: query };
    }
}

module.exports = User;
