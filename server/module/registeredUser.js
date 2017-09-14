let mongodb = require("../db/usersDb.config");

class User {
  constructor(name, password, email) {
    this.name = name;
    this.password = password;
    this.email = email;
  }
  save(callback) {
    //存储用户信息
    let user = {
      name: this.name,
      password: this.password,
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
        //用户信息插入registeruser集合
        collection.insert(user, function (err, user) {
          mongodb.close();
          if (err) {
            return callback(err);
          }
          return callback(user.result.ok);
        });
      });
    });
  }
  get(name, callback) {//读取用户信息
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
}
module.exports = User;
