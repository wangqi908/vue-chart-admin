<template>
  <div>
    <p>注册用户</p>
    <ve-line :data="chartData"></ve-line>
  </div>
</template>

<script>
import { sameTypeToGrouping, formatTime } from '@u'
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
      data.forEach(ele => {
        ele.registerTime = formatTime(ele.registerTime, 'YMD')
      })
      let groupArr = sameTypeToGrouping(data, 'registerTime')
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
      this.chartData = chartData
    }
  },

  mounted() {
    this.setData()
  }
}
</script>