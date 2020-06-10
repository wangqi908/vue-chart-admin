const express = require('express')
const router = express.Router()

const ZbModel = require('../db/zb')

router.get('/', (req, res) => {
  res.send({ status: 200, data: 'ok' })
})

router.post('/add', (req, res) => {
  let Model = new ZbModel(req.body)
  Model.save((err, user) => {
    res.send({ status: 200, data: 'ok' })
  })
})
module.exports = router
