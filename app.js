var app = require('koa')()
  , logger = require('koa-logger')
  , json = require('koa-json')
  , views = require('koa-views')
  , onerror = require('koa-onerror');

var index = require('./routes/index');
var users = require('./routes/users');
const cors = require('koa-cors');
// error handler
onerror(app);
//设置跨域访问
app.use(cors({
  origin: function (ctx) {
    // console.log(ctx)
      // if (ctx.url === '/test') {
      //     return "*"; // 允许来自所有域名请求
      // }
      // return 'http://localhost:8080';
      return "*";
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))

// global middlewares
app.use(views('views', {
  root: __dirname + '/views',
  default: 'jade'
}));
app.use(require('koa-bodyparser')());
app.use(json());
app.use(logger()); // console logger

app.use(function* (next) {
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

app.use(require('koa-static')(__dirname + '/public'));
// routes definition
app.use(index.routes(), index.allowedMethods());
app.use(users.routes(), users.allowedMethods());
module.exports = app;
