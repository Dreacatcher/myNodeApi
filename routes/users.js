const router = require('koa-router')();
const users = require('../server/api/users');
router.prefix('/api/users');

/**
 *users0001 :用户列表接口
 *users0002 :个人用户查询接口
 */
router.get('/users0001', function* (req, res, next) {
	yield this.body = users.getUserInfo(this.request.body);
});

router.post('/users0001', function* (ctx, next) {
	yield this.body = users.getUserInfo(this.request.body);
});


module.exports = router;

