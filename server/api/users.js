let RegisteredUser = require('../module/registeredUser');
let UsersInfo = require('../module/getUsersInfo');
let GetMyInfos = require('../module/getMyInfos');
let DeleteUserInfos = require('../module/deleteUserInfos');
var flash = require("connect-flash"); // 往session增加字段
const validate = require('../../server/tools/validate');
const common = require('../../server/tools/common');
let UserModleCommon = require("../module/common/userModleCommon");
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
      let newUser = new RegisteredUser()
      newUser.name = _param.body.name
      newUser.password = _param.body.password
      newUser.email = _param.body.email
      let userModleCommon = new UserModleCommon()
      userModleCommon.getName(_param.body.name, function (err, user) {
        //用户已存在
        responseInfo = {
          code: 500,
          datas: ['注册失败'],
          status: 'error'
        }
        _userInfo = common.responseInfo(responseInfo)
        if (err) {
          cb(null, _userInfo);
        }
        if (user&&user.name&&user.name==!'') {//用户存在
          responseInfo = {
            code: 200,
            datas: ['用户已存在'],
            status: 'ok'
          }
          _userInfo = common.responseInfo(responseInfo)
          cb(null, _userInfo);
        } else {
          //用户不存在
          newUser.save(function (info) {
            responseInfo = {
              code: 200,
              datas: ['注册成功'],
              status: 'ok'
            }
            _userInfo = common.responseInfo(responseInfo)
            cb(null, _userInfo);
          })
        }
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
  getMyInfo(_param) {
    return function (cb) {
      validate.validateHead(_param, function (_validate) {
        let getMyInfos = new GetMyInfos({
        })
        let responseInfo = {}
        let isCanQuery = false
        if (_param.name == '' || _param.email == '') {
          responseInfo = {
            code: 200,
            datas: [],
            status: '查询条件为空'
          }
          _userInfo = common.responseInfo(responseInfo)
          isCanQuery = true
          cb(null, _userInfo);
        }
        if (isCanQuery) {
          if (_validate) {
            getMyInfos.getAllUsers(function (err, item) {
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
        }
      })
    }
  },
  deleteUserInfos(_param) {
    return function (cb) {
      validate.validateHead(_param, function (_validate) {
        let deleteUserInfos = new DeleteUserInfos({
        })
        let responseInfo = {}
        if (_validate) {
          deleteUserInfos.deleteUserInfo(function (err, item) {
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
                status: '删除成功'
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