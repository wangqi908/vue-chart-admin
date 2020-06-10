const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send({ code: 200, title: '直播报表服务OK', msg: 'ok' })
})

module.exports = router
