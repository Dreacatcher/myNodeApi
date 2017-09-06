let RegisteredUser = require('../module/registeredUser');
let UsersInfo = require('../module/getUsersInfo');
let crypto = require("crypto");
var flash = require("connect-flash"); // 往session增加字段
//生成MD5加密
var md5 = crypto.createHash('md5');

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
      let _password=md5.update(_param.password).digest('hex');
      let newUser = new RegisteredUser({})
      newUser.name = _param.name
      newUser.password = _password
      newUser.email = _param.email
      newUser.get(_param.name, function (err, user) {
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
        try {
          _userInfo = {
            code: 200,
            body: {
              datas: item
            },
            status: 'ok'
          }
          cb(null, _userInfo);
        } catch (e) {
          _userInfo = {
            code: 200,
            body: {
              datas: e
            },
            status: 'error'
          }
          cb(null, _userInfo);
        }
      })
    }
  }
}
module.exports = userInfo;