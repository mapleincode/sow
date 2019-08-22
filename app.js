'use strict';

const Koa = require('koa');
const logger = require('koa-logger');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyParser = require('koa-bodyparser');
const koaStatic = require('koa-static');

const app = new Koa();

require('./load_sow');
const indexRouter = require('./routers/index');

// error handler
onerror(app);


app.use(bodyParser());
app.use(json());
app.use(logger());
app.use(koaStatic(__dirname + '/public', {}));

app.use(indexRouter.routes(), indexRouter.allowedMethods());

app.listen(8001);

app.on('error', err => {
  console.error('server error', err)
});