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
      res.send({ status: 0, data: err })
      return
    }
    if (!doc) {
      res.send({ status: 0, data: '未找到' })
      return
    }

    let list = JSON.parse(JSON.stringify(doc))

    list.forEach(ele => {
      ele.registerTime = formatTime(ele.registerTime, 'YMD')
    })
    console.log(list)
    let setData = new SetData(list)
    let registerData = setData.getRegisterData()
    let mapData = setData.getMapData()
    let goodsData = setData.getGoodsData()

    res.send({ status: 200, data: { registerData, mapData, goodsData } })
  }).sort({ registerTime: 1 })
})

router.post('/zb', async (req, res) => {
  let { startTime, endTime } = req.body
  let query = {}
  // 如果传查询条件,则使用查询条件,否则默认查询最近的30天
  if (startTime && endTime) {
    query = { enterTime: { $gte: startTime, $lte: endTime } }
  } else {
    let lastOne = await ZbModel.find({}, zbFilters).limit(1).sort({ enterTime: -1 })
    let _endTime = lastOne[0].enterTime
    let _startTime = _endTime * 1 - 60 * 60 * 24 * 30 * 1000
    query = { enterTime: { $gte: _startTime, $lte: _endTime } }
  }
  ZbModel.find(query, zbFilters, async (err, doc) => {
    if (err) {
      res.send({ status: 0, data: err })
      return
    }
    if (!doc) {
      res.send({ status: 0, data: '未找到' })
      return
    }

    let list = JSON.parse(JSON.stringify(doc))
    list.forEach(ele => {
      ele.enterTime = formatTime(ele.enterTime, 'YMD')
    })

    let setData = new SetData(list)
    let onlineUserNumber = setData.getOnlineUserNumber()
    res.send({ status: 200, data: { onlineUserNumber } })
  }).sort({ enterTime: 1 })
})

module.exports = router
