let mongodb = require("../../db/usersDb.config");
class userModleCommon {
  constructor(name, email) {
    this.name = name || '';
    this.email = email || '';
  }
  getName(_name, callback) {//读取用户信
    //打开数据库
    mongodb.open(function (err, db) {
      console.log("userModleCommon333333333333333")
      console.log(err)
      if (err) {
        return callback(err);
      }
      console.log("userModleCommon44444")
      db.collection('usersInfo', function (err, collection) {
        if (err) {
          callback(err);
        }
       
        //查找用户名
        collection.findOne({
          name: _name
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
  getEmail(_email, callback) {//读取用户信息
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
          email: _email
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
