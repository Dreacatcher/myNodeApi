var router = require('koa-router')();

router.prefix('/api/users');

router.get('/', function *(next) {
  this.body = 'this is a users response!';
});

router.get('/bar', function *(next) {
  this.body = 'this is a users/bar response!';
});
router.post('/published', function (req, res) {
  // var currentUser = req.session.user,
  post = new Post(req.body.title, req.body.post);
  post.save(function (err) {
    if (err) {
      req.flash('error', err);
      return res.redirect("/");
    }
  });
  req.flash('success', '发表成功');
  res.redirect('/');
});

module.exports = router;
