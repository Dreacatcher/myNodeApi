/*
 * @Author: lucm 
 * @Date: 2017-09-06 17:24:24 
 * @Last Modified by: lucm
 * @Last Modified time: 2017-09-12 21:38:55
 */

class Common {
  responseInfo(param) {
    let _userInfo = {}
    _userInfo = {
      body: {
        datas:param.datas
      },
      head:{
        code: param.code,
        status: param.status
      }
    }
    return _userInfo
  }
}
module.exports = new Common()