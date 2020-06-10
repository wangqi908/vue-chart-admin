const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', (req, res) => {
  res.send({ status: 200, data: '直播报表服务OK' })
})

module.exports = router
