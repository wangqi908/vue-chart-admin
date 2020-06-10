// 直播数据

const mongoose = require('./index.js')
const Schema = mongoose.Schema
const ZbSchema = new Schema({
  userName: { type: String }, //用户姓名
  nickname: { type: String }, //昵称
  phone: { type: String }, //手机号
  email: { type: String }, //邮箱
  address: { type: String }, //地址
  onlineTime: { type: String }, //总在线时长
  studyTime: { type: String }, //学习时长
  enterTime: { type: String } //首次进入时间
})
module.exports = mongoose.model('zb', ZbSchema)
