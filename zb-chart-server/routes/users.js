const express = require('express')
const router = express.Router()
const UserModel = require('../db/user')
const setPage = require('../utils/page').setPage

/* GET users listing. */
router.get('/', (req, res) => {
  res.send({ status: 200, data: 'ok' })
})

router.post('/add', (req, res) => {
  UserModel.create(req.body, function (err, docs) {
    res.send({ status: 200, data: 'ok' })
  })
})

router.post('/insert', async (req, res) => {
  let { list } = req.body
  const allData = await UserModel.find({})

  // 根据enterTime判断,防止重复插入
  let newList = []
  list.forEach(newItem => {
    let flag = allData.find(oldItem => oldItem.enterTime === newItem.enterTime)
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
    // 分页
    const pageRes = await setPage(UserModel, data, pageData, filterArr)
    res.send({ code: 200, data: pageRes })
  } catch (err) {
    res.send({ code: 0, err })
  }
})

module.exports = router
