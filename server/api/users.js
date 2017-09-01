
/**
 *users0001 :用户列表接口
 *users0002 :个人用户查询接口
 */
let userInfo = {
  getUserInfo(_param) {
    console.log(_param)
    let userInfo = {
      code: 200,
      body: {
        title: '接口测试',
        cont: '发表接口'
      },
      status:'success'
    }
    return userInfo
  }
}

module.exports = userInfo;