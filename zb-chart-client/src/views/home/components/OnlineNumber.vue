<template>
  <div>
    <p>在线人数统计报表</p>
    <div class="option-box">
      <el-date-picker
        v-model="value"
        type="daterange"
        value-format="timestamp"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        @change="change"
      ></el-date-picker>
      <el-button class="btn" type="primary" plain @click="reset">重置</el-button>
    </div>
    <ve-histogram :data="chartData"></ve-histogram>
  </div>
</template>

<script>
import { chartZbReq } from '@api'
export default {
  data() {
    return {
      chartData: {},
      value: []
    }
  },
  methods: {
    async getData(query = {}) {
      const res = await chartZbReq(query)
      let { onlineUserNumber } = res.data.data
      if (onlineUserNumber.rows.length === 0) this.$message('无数据')
      this.chartData = onlineUserNumber
    },
    change() {
      let [startTime, endTime] = this.value
      this.getData({ startTime, endTime })
    },
    reset() {
      this.value = []
      this.getData()
    }
  },
  created() {
    this.getData()
  }
}
</script>

<style lang="scss" scoped>
.option-box {
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
  .btn {
    margin-left: 30px;
  }
}
</style>