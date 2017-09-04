const router = require('koa-router')();
const users = require('../server/api/users');
router.prefix('/api/users');

/**
 * users0001 获取用户详情信息
 */
router.get('/users0001', function* (req, res, next) {
	console.log('post请求参数对象 :',req.query);
	yield this.body = users.getUserInfo(req.query);
});
router.post('/users0001', function* (ctx, next) {
	yield this.body = users.getUserInfo(this.request.body);
});


module.exports = router;

