/*
 * @Author: lucm 
 * @Date: 2017-09-06 17:24:24 
 * @Last Modified by: lucm
 * @Last Modified time: 2017-09-06 21:57:51
 */

let base64_encode = require('Base64').encode
//生成MD5签名加密
let crypto = require('crypto');
let md5 = crypto.createHash('md5');

// ******************************* Setting ***********************************/
let appid = 'BASMD5-LCM-520-LYL'
let appkey = 'vws3236ce4fdscsfdsecdserr3232fdsf30d835243czxc4fds'
let siteid = '520100'

// ******************************* Setting ***********************************/
class Validate {
  packageParamBase(param) {
    let _param = param || {}
    let _sign = md5.update((base64_encode(JSON.stringify(_param) + appid)) + siteid + appkey).digest('hex');
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
  validateHead(ctx,callback) {
    if (packageParamBase(ctx.request.body) == ctx.request.body.sign) {
      // 签名通过
      if (ctx.header.contenType=='application/json'&&ctx.method=='POST') {
        callback()
      }else{
        ctx.status = 500;
        ctx.body = e.message;
      }
    }
  }
}
module.exports = Validate