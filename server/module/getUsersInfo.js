let mongodb = require("../db/usersDb.config");
class UsersInfo {
  getAllUsers(callback) {//读取用户信息
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
        collection.find().sort({
          time: -1
        }).toArray(function (err, item) {
          mongodb.close();
          if (err) {
            return callback(err);//查询失败，返回错误
          }
          callback(null, item);//成功返回查询的文章
        });
      });
    });
  };
}
module.exports = UsersInfo;
