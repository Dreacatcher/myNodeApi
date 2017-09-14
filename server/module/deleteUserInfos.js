let mongodb = require("../db/usersDb.config");
class deleteUserInfos {
  constructor(name, email) {
    this.name = name || '';
    this.email = email || '';
  }
  save(callback) {
    //存储用户信息
    let user = {
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
        if (this.name && this.name != '') {
          this.getName(this.name, function () {
            collection.remove(this.name, function (err, result) {
              mongodb.close();
              if (err) {
                return callback(err);
              }
              return callback(result);
            });
          })
        }
        if (this.email && this.email != '') {
          this.getName(this.email, function () {
            collection.remove(this.email, function (err, result) {
              mongodb.close();
              if (err) {
                return callback(err);
              }
              return callback(result);
            });
          })
        }
      });
    });
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
module.exports = deleteUserInfos;
