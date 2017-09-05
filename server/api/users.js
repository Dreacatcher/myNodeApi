let usersModel = require('../module/usersModel');
let userInfo = {
  /**
   * getUserInfo
   * 用户列表接口
   * @param {any} _param
   * @returns
   */
  getUserInfo(_param) {
    return function (cb) {
      let _userInfo = {}
      let newUser = new usersModel({
        name: _param.name,
        password: _param.password,
        email: _param.email,
      })
      newUser.get(newUser.name, function (err, user) {
        //用户已存在
        if (err) {
          console.log("用户已存在")
          // req.flash("error", err);
          // return res.redirect("/");
        }
        if (user) {//用户存在
          console.log("用户存在")
          // req.flash("error", '用户已经存在');
          // return res.redirect("/register");
        }
        //用户不存在
        newUser.save(function (info) {
          _userInfo = {
            code: 200,
            body: {
              req: _param.title,
              title: '用户接口',
              cont: '用户接口--获取用户信心详情接口'
            },
            status: info
          }
          cb(null, _userInfo);
        })
      })

    }
  }
}
module.exports = userInfo;