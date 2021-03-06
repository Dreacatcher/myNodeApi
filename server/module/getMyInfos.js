let mongodb = require("../db/usersDb.config");
let userModleCommon = require("../module/common/userModleCommon");
class getMyInfos {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  getInfos(callback) {//读取用户信息
    let self =this
    //打开数据库
    mongodb.open(function (err, db) {
      if (err) {
        return callback(err);
      }
      db.collection('usersInfo', function (err, collection) {
        if (err) {
          callback(err);
        }
        if (!self.name == '') {
          //查找用户名
          collection.find({
            name: self.name
          }).sort({
            time: -1
          }).toArray(function (err, item) {
            mongodb.close();
            if (err) {
              return callback(err);//查询失败，返回错误
            }
            callback(null, item);//成功返回查询的文章
          });
        }
        if (!self.email == '') {
          //查找用户名
          collection.find({
            email: self.email
          }).sort({
            time: -1
          }).toArray(function (err, item) {
            mongodb.close();
            if (err) {
              return callback(err);//查询失败，返回错误
            }
            callback(null, item);//成功返回查询的文章
          });
        }
      });
    });
  };
}
module.exports = getMyInfos;
