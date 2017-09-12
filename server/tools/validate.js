/*
 * @Author: lucm 
 * @Date: 2017-09-06 17:24:24 
 * @Last Modified by: lucm
 * @Last Modified time: 2017-09-12 17:53:33
 */

//生成MD5签名加密
let crypto = require('crypto');
let md5 = crypto.createHash('md5');
var Buffer = require('buffer').Buffer;
// ******************************* Setting ***********************************/
let appid = 'BASMD5-LCM-520-LYL'
let appkey = 'vws3236ce4fdscsfdsecdserr3232fdsf30d835243czxc4fds'
let siteid = '520100'
// ******************************* Setting ***********************************/
class Validate {
  packageParamBase(param) {
    let _param = param || {}
    let _sign = md5.update(encodeURI((Buffer(JSON.stringify(_param) + appid)) + siteid) + appkey).digest('hex');
    // _sign = Buffer(_sign)
    console.log(_sign)
    let _requestParam = {
      head: {
        appid: appid,
        sign: _sign,
        siteid: siteid,
        version: '1.0'
      },
      body: param
    }
    return _requestParam
  }
  validateHead(ctx, callback) {
    let _packageParamBase = this.packageParamBase(ctx.body)
    if (_packageParamBase.appid == ctx.head.appid && _packageParamBase.sign == ctx.head.sign && _packageParamBase.siteid == ctx.head.siteid) {
      callback()
    } else {
      ctx.status = 500;
      ctx.body = '验签失败';
    }
  }
}
module.exports = new Validate()