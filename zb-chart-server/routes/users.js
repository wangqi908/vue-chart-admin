const express = require('express')
const router = express.Router()

const UserModel = require('../db/user')

/* GET users listing. */
router.get('/', (req, res) => {
  res.send({ status: 200, data: 'ok' })
})

router.post('/add', (req, res) => {
  let Model = new UserModel(req.body)
  Model.save((err, user) => {
    res.send({ status: 200, data: 'ok' })
  })
})

module.exports = router
