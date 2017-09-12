/*
 * @Author: lucm 
 * @Date: 2017-09-06 17:24:24 
 * @Last Modified by: lucm
 * @Last Modified time: 2017-09-12 11:11:27
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
class Fetch {
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
  getServerceDatas(_Param,url,callback) {
   let  _resetParam=this.packageParamBase(_Param)
    $.ajax({
      type: 'POST',
      url: url,
      contenType:'application/json',
      data: _resetParam,
      success: function (datas) {
        callback(datas)
      }
    })
  }
}
module.exports = Fetch