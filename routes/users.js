const router = require('koa-router')();
const users = require('../server/api/users');
router.prefix('/api/users');

/**
 *users0001 :用户列表接口
 *users0002 :个人用户查询接口
 */
router.get('/users0001', function* () {
	yield this.body = users.registeredUser(this.request.body);
});

router.post('/users0001', function* () {
	this.body = yield users.registeredUser(this.request.body);
})


/**
 *users0002 :查询所以用户信息接口
 */
router.get('/users0002', function* () {
	yield this.body = users.getUsersInfo(this.request.body);
});

router.post('/users0002', function* () {
	this.body = yield users.getUsersInfo(this.request.body);
})


/**
 *users0003 :查询个人信息接口
 */
router.get('/users0003', function* () {
	yield this.body = users.getMyInfo(this.request.body);
});

router.post('/users0003', function* () {
	this.body = yield users.getMyInfo(this.request.body);
})


/**
 *users0004 :删除个人信息
 */
router.get('/users0004', function* () {
	yield this.body = users.deleteUserInfos(this.request.body);
});

router.post('/users0004', function* () {
	this.body = yield users.deleteUserInfos(this.request.body);
})

/**
 *users0004 :登陆除个人信息
 */
router.get('/users0005', function* () {
	yield this.body = users.loginUserInfos(this.request.body);
});

router.post('/users0005', function* () {
	this.body = yield users.loginUserInfos(this.request.body);
})

module.exports = router;

