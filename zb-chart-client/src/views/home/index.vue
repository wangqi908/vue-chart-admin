<template>
  <div class="charts">
    <el-row class="card-group">
      <el-col :xs="24" :sm="24" :lg="24">
        <div class="card-item">
          <OnlineNumber class="chart-item" />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="card-item">
          <Register :data="registerData" class="chart-item" />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="card-item">
          <Goods :data="goodsData" class="chart-item" />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="card-item map-box">
          <Map :data="mapData" class="map-chart" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { chartUserReq } from '@api'
import { Map, Goods, Register, OnlineNumber } from './components'
export default {
  components: { Map, Goods, Register, OnlineNumber },
  data() {
    return {
      registerData: {},
      mapData: {},
      goodsData: {}
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
.charts {
  .card-group {
    .card-item {
      height: 450px;
      font-size: 12px;
      color: #666;
      background: #fff;
      box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);
      margin: 10px;
      padding: 20px;
    }
    .map-box {
      display: flex;
      justify-content: center;
      // align-items: center;
      .map-chart {
        height: 400px;
        width: 500px;
      }
    }
  }
}
</style>