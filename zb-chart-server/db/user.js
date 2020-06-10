// 用户信息

const mongoose = require('./index.js')
const Schema = mongoose.Schema
const UserSchema = new Schema({
  userId: { type: String }, //用户ID
  nickname: { type: String }, //昵称
  phone: { type: String }, //手机号
  latestNumber: { type: String }, //最近采集号码
  email: { type: String }, //邮箱
  wechatNo: { type: String }, //微信号
  birthday: { type: String }, //生日
  gender: { type: String }, //性别
  age: { type: Number }, //年龄
  language: { type: String }, //语言
  country: { type: String }, //国家
  province: { type: String }, //省份
  city: { type: String }, //城市
  address: { type: String }, //地址
  industry: { type: String }, //行业
  company: { type: String }, //公司
  interest: { type: String }, //兴趣
  registerTime: { type: Number }, //注册时间
  consumptionAmount: { type: Number }, //消费金额
  lastConsumptionTime: { type: Number }, //最近一次消费时间
  goods: { type: String } //购买商品
})
module.exports = mongoose.model('user', UserSchema)
