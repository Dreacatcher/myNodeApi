/*var mongoose = require('mongoose');
var db = mongoose.connect('mongodb:/localhost:27017/blogs');//；连接数据库
var Schema = mongoose.Schema;   //  创建模型
var userScheMa = new Schema({
	name: String,
	password: String
}); //  定义了一个新的模型，但是此模式还未和users集合有关联
exports.user = db.model('user', userScheMa); //  与users集合关联
*/

var settings = require("../../settings");
settings.db = 'users';
var Db = require('mongodb').Db,
MongoClient = require('mongodb').MongoClient,
Server = require('mongodb').Server;
module.exports = new Db(settings.db, new Server(settings.host, settings.port));


