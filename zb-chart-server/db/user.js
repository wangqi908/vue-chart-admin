/** * 用户信息 */

const mongoose = require('./index.js')
const Schema = mongoose.Schema
const UserSchema = new Schema({
  name: { type: String }, //账号
  pwd: { type: String } //密码
})
module.exports = mongoose.model('User', UserSchema)
