let mongodb = require("../../db/usersDb.config");
class userModleCommon {
  constructor(name, email) {
    this.name = name || '';
    this.email = email || '';
  }
  getName(name, callback) {//读取用户信息
    //打开数据库
    mongodb.open(function (err, db) {
      if (err) {
        return callback(err);
      }
      db.collection('usersInfo', function (err, collection) {
        if (err) {
          callback(err);
        }
        //查找用户名
        collection.findOne({
          name: name
        }, function (err, user) {
          mongodb.close();
          if (err) {
            return callback(err);
          }
          callback(null, user);
        });
      });
    });
  };
  getEmail(email, callback) {//读取用户信息
    //打开数据库
    mongodb.open(function (err, db) {
      if (err) {
        return callback(err);
      }
      db.collection('usersInfo', function (err, collection) {
        if (err) {
          callback(err);
        }
        //查找用户名
        collection.findOne({
          email: email
        }, function (err, user) {
          mongodb.close();
          if (err) {
            return callback(err);
          }
          callback(null, user);
        });
      });
    });
  };
}
module.exports = userModleCommon;
