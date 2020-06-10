<template>
  <el-menu :default-active="activeIndex" @select="handleSelect">
    <el-menu-item index="home">统计</el-menu-item>
    <el-submenu index="data">
      <template slot="title">数据</template>
      <el-menu-item index="user">用户数据</el-menu-item>
      <el-menu-item index="zb">直播数据</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: ''
    }
  },
  methods: {
    handleSelect(key) {
      this.$router.push({ name: key })
    }
  },
  created() {
    this.activeIndex = this.$route.meta.modules || this.$route.name
  },

  watch: {
    $route() {
      this.activeIndex = this.$route.meta.modules || this.$route.name
    }
  }
}
</script>