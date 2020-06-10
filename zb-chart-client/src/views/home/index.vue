<template>
  <div>
    <p>index</p>
    <Map :data="userList" class="map-box" />
    <Goods :data="userList" class="goods-box" />
  </div>
</template>

<script>
import { userListReq } from '@api'
import { Map, Goods } from './components'
export default {
  components: { Map, Goods },
  data() {
    return {
      userList: []
    }
  },
  methods: {
    async getUserList() {
      const res = await userListReq({})
      let userList = res.data.data
      this.userList = userList
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