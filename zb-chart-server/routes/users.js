const express = require('express')
const router = express.Router()

const UserModel = require('../db/user')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send({ code: 200, title: 'users', msg: 'ok' })
})
router.post('/add', function (req, res, next) {
  let { name, pwd } = req.body
  console.log(name, pwd)
  let Model = new UserModel({ name, pwd })
  Model.save((err, user) => {
    res.send({ code: 200, data: 'ok' })
  })
})

module.exports = router
