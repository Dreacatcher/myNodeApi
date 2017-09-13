/*
 * @Author: lucm 
 * @Date: 2017-09-06 17:24:24 
 * @Last Modified by: lucm
 * @Last Modified time: 2017-09-13 10:43:47
 */

class Common {
  responseInfo(param) {
    let _userInfo = {}
    let _datas = this.dataEncode(param.datas)
    _userInfo = {
      body: {
        datas: _datas
      },
      head: {
        code: param.code,
        status: param.status
      }
    }
    return _userInfo
  }
  // ---------------XSS和防止mongodb注入--------------//
  htmlEncode(str) {
    let s = ''
    if (str.length === 0) return ''
    // s = str.replace(/ /g, "&nbsp;");
    // s = str.replace(/&/g, "&amp;");
    s = str.replace(/</g, '%26lt%3B')
    s = s.replace(/%3C/g, '%26lt%3B')
    s = s.replace(/%3c/g, '%26lt%3B')
    s = s.replace(/>/g, '%26gt%3B')
    s = s.replace(/%3E/g, '%26gt%3B')
    s = s.replace(/%3e/g, '%26gt%3B')
    s = s.replace(/\$/g, "&#36;");
    // s = s.replace(/\'/g, "&#39;");
    // s = s.replace(/\"/g, "&quot;");
    // s = s.replace(/\n/g, "<br>");
    return s
  }
  dataEncode(data) {
    // Encode
    let rel = data
    let source = ''
    if (typeof rel === 'object') {
      source = this.htmlEncode(JSON.stringify(rel))
      source = JSON.parse(source)
      rel = source
    } else if (typeof rel === 'string') {
      source = this.htmlEncode(rel)
      rel = source
    }
    return rel
  }
}
module.exports = new Common()