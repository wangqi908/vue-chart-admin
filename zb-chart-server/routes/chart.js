const express = require('express')
const router = express.Router()
const UserModel = require('../db/user')
const ZbModel = require('../db/zb')
const { formatTime } = require('../utils')
const SetData = require('../utils/SetData')
let userFilters = {
  __v: 0,
  _id: 0,
  userId: 0,
  nickname: 0,
  phone: 0,
  latestNumber: 0,
  email: 0,
  wechatNo: 0,
  birthday: 0,
  gender: 0,
  age: 0,
  language: 0,
  country: 0,
  city: 0,
  address: 0,
  industry: 0,
  company: 0,
  interest: 0,
  lastConsumptionTime: 0
}
let zbFilters = {
  __v: 0,
  _id: 0,
  userId: 0,
  nickname: 0,
  phone: 0,
  email: 0,
  address: 0
}

router.get('/user', (req, res) => {
  UserModel.find({}, userFilters, async (err, doc) => {
    if (err) {
      res.send({ code: 0, data: err })
      return
    }
    if (!doc) {
      res.send({ code: 0, msg: '未找到' })
      return
    }

    let list = JSON.parse(JSON.stringify(doc))

    list.forEach(ele => {
      ele.registerTime = formatTime(ele.registerTime, 'YMD')
    })

    let setData = new SetData(list)
    let registerData = setData.getRegisterData()
    let mapData = setData.getMapData()
    let goodsData = setData.getGoodsData()

    res.send({ code: 200, data: { registerData, mapData, goodsData } })
  })
})

router.post('/zb', (req, res) => {
  ZbModel.find({}, zbFilters, async (err, doc) => {
    if (err) {
      res.send({ code: 0, data: err })
      return
    }
    if (!doc) {
      res.send({ code: 0, msg: '未找到' })
      return
    }

    let list = JSON.parse(JSON.stringify(doc))
    console.log(list)

    res.send({ code: 200, data: list })
  })
})

module.exports = router
