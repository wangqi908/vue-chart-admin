const express = require('express')
const router = express.Router()

const ZbModel = require('../db/zb')

router.get('/', (req, res) => {
  res.send({ status: 200, data: 'ok' })
})

router.post('/add', (req, res) => {
  ZbModel.create(req.body, function (err, docs) {
    res.send({ status: 200, data: 'ok' })
  })
})

router.post('/insert', async (req, res) => {
  let { list } = req.body
  const allData = await ZbModel.find({})

  // 根据enterTime判断,防止重复插入
  let newList = []
  list.forEach(newItem => {
    let flag = allData.find(oldItem => oldItem.enterTime === newItem.enterTime)
    if (!flag) newList.push(newItem)
  })

  ZbModel.insertMany(newList).then(data => {
    res.send({ status: 200, data: 'ok' })
  })
})
module.exports = router
