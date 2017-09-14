let mongodb = require("../db/usersDb.config");

class deleteUserInfos {
  constructor(name, email) {
    this.name = name || '';
    this.email = email || '';
  }
  deleteUserInfo(callback) {
    //存储用户信息
    let queryConditions = {
      name: this.name,
      email: this.email
    }
    //打开数据库
    mongodb.open(function (err, db) {
      if (err) {
        return callback(err);
      }
      //读取registeruser集合
      db.collection('usersInfo', function (err, collection) {
        if (err) {
          mongodb.close();
          return callback(err);
        }
        if (queryConditions.name && queryConditions.name != '') {
          collection.remove({ name: queryConditions.name }, function (err, result) {
            mongodb.close();
            if (err) {
              return callback(err);
            }
            return callback(null,result);
          });
        }
        if (queryConditions.email && queryConditions.email != '') {
          collection.remove({ email: queryConditions.email }, function (err, result) {
            mongodb.close();
            if (err) {
              return callback(err);
            }
            return callback(null,result);
          });
        }
      });
    });
  }
}
module.exports = deleteUserInfos;
