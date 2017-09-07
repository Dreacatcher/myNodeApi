const router = require('koa-router')();
const users = require('../server/api/users');
const validate = require('../server/tools/validate');
router.prefix('/api/users');

/**
 *users0001 :用户列表接口
 *users0002 :个人用户查询接口
 */
router.get('/users0001', function* () {
	yield this.body = users.registeredUser(this.request.body);
});

router.post('/users0001', function* () {
	console.log('this.request.body')
	console.log(this.request)
	console.log(validate.packageParamBase(this.request.body));
	this.body = yield users.registeredUser(this.request.body);
})


/**
 *users0002 :个人用户查询接口
 */
router.get('/users0002', function* () {
	yield this.body = users.getUsersInfo(this.request.body);
});

router.post('/users0002', function* () {
	this.body = yield users.getUsersInfo(this.request.body);
})

module.exports = router;

