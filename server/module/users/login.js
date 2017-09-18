let mongodb = require("../../db/usersDb.config");
class Login {
  constructor(name, password) {
    this.name = name;
    this.password = password;
  }
  userLogin(callback) {//读取用户信息
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
        if (!self.name == ''&&!self.password == '') {
          //查找用户名
          collection.find({
            name: self.name,
            password:self.password
          }).sort({
            time: -1
          }).toArray(function (err, item) {
            mongodb.close();
            if (err) {
              return callback(err);//登陆失败
            }
            callback(null, item);//登陆成功
          });
        }
      });
    });
  };
}
module.exports = Login;
