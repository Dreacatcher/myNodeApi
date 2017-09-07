/*
 * @Author: lucm 
 * @Date: 2017-09-06 17:24:24 
 * @Last Modified by: lucm
 * @Last Modified time: 2017-09-07 10:17:05
 */

let base64_encode = require('base64url');
//生成MD5签名加密
let md5 = require('md5');
// ******************************* Setting ***********************************/
let appid = 'BASMD5-LCM-520-LYL'
let appkey = 'vws3236ce4fdscsfdsecdserr3232fdsf30d835243czxc4fds'
let siteid = '520100'

// ******************************* Setting ***********************************/
class Validate {
  packageParamBase(param) {
    console.log("param")
    let _param = param || {}
    let _sign = md5((base64_encode(JSON.stringify(_param) + appid)) + siteid + appkey);
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
    if (this.packageParamBase(ctx.request.body) == ctx.request.body.sign) {
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
module.exports = new Validate()