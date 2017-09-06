let usersModel = require('../module/usersModel');
let UsersInfo = require('../module/getUsersInfo');
let userInfo = {
  /**
   * getUserInfo
   * 用户列表接口
   * @param {any} _param
   * @returns
   */
  registeredUser(_param) {
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
          console.log(err)
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
  },
  getUsersInfo(_param) {
    return function (cb) {
      let _userInfo = {}
      let newUser = new UsersInfo({
      })
      newUser.getAllUsers(function (err, item) {
        //用户已存在
        if (err) {
          console.log("111用户已存在")
          console.log(err)
          console.log("222用户已存在")
          // req.flash("error", err);
          // return res.redirect("/");
        }

        _userInfo = {
          code: 200,
          body: {
            datas: item
          },
          status: 'ok'
        }
        cb(null, _userInfo);
      })
    }
  }
}
module.exports = userInfo;