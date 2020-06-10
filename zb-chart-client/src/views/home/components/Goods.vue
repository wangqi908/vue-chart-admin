<template>
  <div>
    <p>购买商品分布</p>
    <ve-pie :data="chartData"></ve-pie>
  </div>
</template>

<script>
import { sameTypeToGrouping } from '@u'
export default {
  data() {
    return {
      chartData: {}
    }
  },
  props: ['data'],
  methods: {
    setData() {
      let data = this.data
      let groupArr = sameTypeToGrouping(data, 'goods')
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
      this.chartData = chartData
    }
  },

  mounted() {
    this.setData()
  }
}
</script>