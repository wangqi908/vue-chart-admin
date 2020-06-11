<template>
  <div>
    <!-- <Map :data="mapData" class="map-box" />
    <Goods :data="goodsData" class="goods-box" />
    <Register :data="registerData" class="register-box" />-->
    <OnlineNumber />
    <el-date-picker
      v-model="value2"
      type="daterange"
      value-format="timestamp"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
    ></el-date-picker>
    {{value2}}
  </div>
</template>

<script>
import { chartUserReq } from '@api'
import { Map, Goods, Register, OnlineNumber } from './components'
export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { Map, Goods, Register, OnlineNumber },
  data() {
    return {
      registerData: {},
      mapData: {},
      goodsData: {},
      value2: []
    }
  },
  methods: {
    async getUserList() {
      const res = await chartUserReq()
      let { registerData, mapData, goodsData } = res.data.data
      this.registerData = registerData
      this.mapData = mapData
      this.goodsData = goodsData
    }
  },
  created() {
    this.getUserList()
  }
}
</script>

<style lang='scss'>
.map-box {
  width: 500px;
}
</style>