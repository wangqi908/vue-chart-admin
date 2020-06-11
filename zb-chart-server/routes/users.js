const express = require('express')
const router = express.Router()
const UserModel = require('../db/user')
const setPage = require('../utils/page').setPage

/* GET users listing. */
router.get('/', (req, res) => {
  res.send({ status: 200, data: 'ok' })
})

router.post('/list', (req, res) => {
  UserModel.find({}, { __v: 0 }, async (err, doc) => {
    if (err) {
      res.send({ code: 0, data: err })
      return
    }
    if (!doc) {
      res.send({ code: 0, msg: '未找到' })
      return
    }
    res.send({ code: 200, data: doc })
  })
})

router.post('/view', (req, res) => {
  let { _id } = req.body
  UserModel.findOne({ _id }, { __v: 0 }, async (err, doc) => {
    if (err) {
      res.send({ code: 0, data: err })
      return
    }
    if (!doc) {
      res.send({ code: 0, msg: '未找到' })
      return
    }

    res.send({ code: 200, data: doc })
  })
})

router.post('/add', (req, res) => {
  UserModel.create(req.body, function (err, docs) {
    res.send({ status: 200, data: 'ok' })
  })
})

router.post('/insert', async (req, res) => {
  let { list } = req.body
  const allData = await UserModel.find({})

  // 根据userId判断,防止重复插入
  let newList = []
  list.forEach(newItem => {
    let flag = allData.find(oldItem => oldItem.userId === newItem.userId)
    if (!flag) newList.push(newItem)
  })

  UserModel.insertMany(newList).then(data => {
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

    let sort = { registerTime: -1 }
    let pageParams = {
      Model: UserModel,
      data,
      pageData,
      filterArr,
      sort
    }

    // 分页
    const pageRes = await setPage(pageParams)
    res.send({ code: 200, data: pageRes })
  } catch (err) {
    res.send({ code: 0, err })
  }
})

module.exports = router
