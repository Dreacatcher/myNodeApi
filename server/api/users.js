let RegisteredUser = require('../module/registeredUser');
let UsersInfo = require('../module/getUsersInfo');
var flash = require("connect-flash"); // 往session增加字段
const validate = require('../../server/tools/validate');
const common = require('../../server/tools/common');
//生成MD5加密
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
      let newUser = new RegisteredUser({})
      newUser.name = _param.name
      newUser.password = _param._password
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
      validate.validateHead(_param, function (_validate) {
        let newUser = new UsersInfo({
        })
        let responseInfo = {}
        if (_validate) {
          newUser.getAllUsers(function (err, item) {
            //用户已存在
            if (err) {
              responseInfo = {
                code: 500,
                datas: [],
                status: err.message
              }
              _userInfo = common.responseInfo(responseInfo)
              cb(null, _userInfo);
            }
            try {
              responseInfo = {
                code: 200,
                datas: item,
                status: '获取数据成功'
              }
              _userInfo = common.responseInfo(responseInfo)
              cb(null, _userInfo);
            } catch (e) {
              responseInfo = {
                code: 200,
                datas: [],
                status: e
              }
              _userInfo = common.responseInfo(responseInfo)
              cb(null, _userInfo);
            }
          })
        } else {
          responseInfo = {
            code: 200,
            datas: [],
            status: '验签失败'
          }
          _userInfo = common.responseInfo(responseInfo)
          cb(null, _userInfo);
        }
      })
    }
  },
  deleteUserInfos(_param) {
    return function (cb) {
      validate.validateHead(_param, function (_validate) {
        let newUser = new UsersInfo({
        })
        let responseInfo = {}
        if (_validate) {
          newUser.getAllUsers(function (err, item) {
            //用户已存在
            if (err) {
              responseInfo = {
                code: 500,
                datas: [],
                status: err.message
              }
              _userInfo = common.responseInfo(responseInfo)
              cb(null, _userInfo);
            }
            try {
              responseInfo = {
                code: 200,
                datas: item,
                status: '获取数据成功'
              }
              _userInfo = common.responseInfo(responseInfo)
              cb(null, _userInfo);
            } catch (e) {
              responseInfo = {
                code: 200,
                datas: [],
                status: e
              }
              _userInfo = common.responseInfo(responseInfo)
              cb(null, _userInfo);
            }
          })
        } else {
          responseInfo = {
            code: 200,
            datas: [],
            status: '验签失败'
          }
          _userInfo = common.responseInfo(responseInfo)
          cb(null, _userInfo);
        }
      })
    }
  },
}
module.exports = userInfo;