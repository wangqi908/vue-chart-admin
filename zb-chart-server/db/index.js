const DB_URL = 'mongodb://localhost:27017/zb-chart'
const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
  if (err) {
    console.log(res)
  }
})

const conn = mongoose.connection
conn.on('connected', function () {
  console.log('数据库连接成功!')
})

module.exports = mongoose
