const express = require('express')
const router = express.Router()
const ZbModel = require('../db/zb')
const setPage = require('../utils/page').setPage

router.get('/', (req, res) => {
  res.send({ status: 200, data: 'ok' })
})

router.post('/list', (req, res) => {
  ZbModel.find({}, { __v: 0 }, async (err, doc) => {
    if (err) {
      res.send({ status: 0, data: err })
      return
    }
    if (!doc) {
      res.send({ status: 0, data: '未找到' })
      return
    }
    res.send({ status: 200, data: doc })
  })
})

router.post('/view', (req, res) => {
  let { _id } = req.body
  ZbModel.findOne({ _id }, { __v: 0 }, async (err, doc) => {
    if (err) {
      res.send({ status: 0, data: err })
      return
    }
    if (!doc) {
      res.send({ status: 0, data: '未找到' })
      return
    }

    res.send({ status: 200, data: doc })
  })
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
    let flag = allData.find(oldItem => oldItem.enterTime + '' === newItem.enterTime + '')
    if (!flag) newList.push(newItem)
  })

  ZbModel.insertMany(newList).then(data => {
    res.send({ status: 200, data: 'ok' })
  })
})

router.post('/page', async (req, res) => {
  const { pageNum, pageSize, data } = req.body
  try {
    let pageData = {
      pageNum,
      pageSize
    }
    let filterArr = ['__v']
    let sort = { enterTime: -1 }
    let pageParams = {
      Model: ZbModel,
      data,
      pageData,
      filterArr,
      sort
    }
    // 分页
    const pageRes = await setPage(pageParams)
    res.send({ status: 200, data: pageRes })
  } catch (err) {
    console.log(err)
    res.send({ status: 0, data: err })
  }
})
module.exports = router
