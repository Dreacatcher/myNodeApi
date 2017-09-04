
/**
 *users0001 :用户列表接口
 *users0002 :个人用户查询接口
 */
let userInfo = {
  getUserInfo(_param) {
    let _userInfo ={}
    if(_param.title == 'aaaa'){
      _userInfo = {
        code: 200,
        body: {
          req: '11111',
          title: '用户接口',
          cont: '用户接口--获取用户信心详情接口'
        },
        status: 'success'
      }
    }else{
      _userInfo = {
        code: 200,
        body: {
          req: 'bbbb',
          title: '用户接口',
          cont: '用户接口--获取用户信心详情接口'
        },
        status: 'success'
      }
    }
    
    return _userInfo
  }
}

module.exports = userInfo;