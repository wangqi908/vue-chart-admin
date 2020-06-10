<template>
  <div>
    <p>用户地区分布</p>

    <ve-map :data="chartData" :settings="chartSettings"></ve-map>
  </div>
</template>

<script>
import { sameTypeToGrouping } from '@u'
export default {
  data() {
    return {
      chartSettings: {
        position: 'china',
        label: false,
        itemStyle: {
          normal: {
            borderColor: '#00f'
          }
        }
      },
      chartData: {}
    }
  },
  props: ['data'],
  methods: {
    setData() {
      let data = this.data

      let provinceGroupArr = sameTypeToGrouping(data, 'province')
      let rows = []
      provinceGroupArr.forEach(ele => {
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
      this.chartData = chartData
    }
  },

  mounted() {
    this.setData()
  }
}
</script>