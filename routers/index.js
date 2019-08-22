'use strict';

const Sow = require('sow');
const Router = require('koa-router');
const router = Router();

const user = Sow.Controllers.get('user');
const home = Sow.Controllers.get('home');

router.get('/', home.home);
router.get('/user', user.login);

module.exports = router;
