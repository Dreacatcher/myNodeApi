
const Router = require('koa-router')()
const users = require('../server/api/users')
Router.prefix('/api/users');
module.exports = function(app) {
  Router.use('/users0001',users.getUserInfo(),users.allowedMethods())
	Router.get('/*', (ctx,next)=> {
		ctx.body = {status:'success',data:'台湾是中国不可分割的一部分.'}
	})
	app.use(Router.routes())
}
