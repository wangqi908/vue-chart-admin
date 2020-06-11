const { sameTypeToGrouping } = require('./index')
module.exports = class SetData {
  constructor(list) {
    this.list = list
  }

  // 获取购买商品比例
  getGoodsData() {
    let groupArr = sameTypeToGrouping(this.list, 'goods')
    let rows = []
    groupArr.forEach(ele => {
      let group = ele.group
      let totalPrice = group.reduce((prev, item) => {
        return prev + item.consumptionAmount
      }, 0)
      totalPrice = totalPrice.toFixed(2) * 1
      rows.push({
        商品: ele.goods,
        金额: totalPrice
      })
    })
    let chartData = {
      columns: ['商品', '金额'],
      rows
    }

    return chartData
  }

  // 获取用户地图分布
  getMapData() {
    let groupArr = sameTypeToGrouping(this.list, 'province')
    let rows = []
    groupArr.forEach(ele => {
      if (ele.province) {
        rows.push({
          位置: ele.province,
          用户: ele.group.length
        })
      }
    })

    let chartData = {
      columns: ['位置', '用户'],
      rows
    }

    return chartData
  }

  // 获取每天注册人数
  getRegisterData() {
    let groupArr = sameTypeToGrouping(this.list, 'registerTime')
    let rows = []
    groupArr.forEach(ele => {
      let group = ele.group
      rows.push({
        日期: ele.registerTime,
        注册人数: group.length
      })
    })
    let chartData = {
      columns: ['日期', '注册人数'],
      rows
    }

    return chartData
  }

  // 获取每天在线人数
  getOnlineUserNumber() {
    let groupArr = sameTypeToGrouping(this.list, 'enterTime')
    let rows = []
    groupArr.forEach(ele => {
      let group = ele.group
      rows.push({
        日期: ele.enterTime,
        在线人数: group.length
      })
    })
    let chartData = {
      columns: ['日期', '在线人数'],
      rows
    }

    return chartData
  }
}
