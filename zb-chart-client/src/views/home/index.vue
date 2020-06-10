<template>
  <div>
    <Map :data="mapData" class="map-box" />
    <Goods :data="goodsData" class="goods-box" />
    <Register :data="registerData" class="register-box" />
  </div>
</template>

<script>
import { chartUserReq } from '@api'
import { Map, Goods, Register } from './components'
export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { Map, Goods, Register },
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
.map-box {
  width: 500px;
}
</style>