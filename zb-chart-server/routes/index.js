var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send({ code: 200, title: '直播报表服务OK', msg: 'ok' })
})

module.exports = router
