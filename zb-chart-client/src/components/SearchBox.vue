<template>
  <el-collapse v-model="activeNames">
    <el-collapse-item :title="title" name="1">
      <div class="search-box">
        <div class="search-inp-box">
          <div class="search-item" v-if="showInput(['zb'])">
            <el-input placeholder="用户名" v-model.trim="searchData.username" clearable></el-input>
          </div>
          <div class="search-item" v-if="showInput(['zb','user'])">
            <el-input placeholder="昵称" v-model.trim="searchData.nickname" clearable></el-input>
          </div>
        </div>
        <div class="search-btn-box">
          <slot></slot>
        </div>
      </div>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
export default {
  props: {
    propSearchData: {
      default: () => {
        return {
          username: '', //用户名
          nickname: '' //昵称
        }
      },
      type: [Object]
    }
  },
  data() {
    return {
      title: '',
      activeNames: ['1'],
      options: [],
      searchData: this.propSearchData,
      selectVal: [],
      activePage: ''
    }
  },
  methods: {
    showInput(val) {
      // 是否展示html里该元素
      let { selectVal, activePage } = this
      let res
      if (typeof val === 'string') {
        res = selectVal.includes(val)
      } else if (Array.isArray(val)) {
        res = val.includes(activePage)
      }
      return res
    }
  },
  created() {
    this.activePage = this.$route.name
    this.title = this.$route.meta.title || ''
  },
  watch: {
    searchData: {
      handler(val) {
        this.$emit('update:propSearchData', val)
      },
      deep: true //对象内部属性的监听，关键。
    }
  }
}
</script>

<style lang='scss'>
.el-collapse {
  .el-collapse-item__header {
    padding: 10px 20px;
    color: #666;
    font-size: 14px;
    height: unset;
    line-height: unset;
  }
  .el-collapse-item__content {
    padding: 0;
  }

  .search-box {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    .search-inp-box {
      display: flex;
      flex: 1;
      flex-wrap: wrap;
      .search-item {
        min-width: 200px;
        margin: 10px;
      }
    }
    .search-btn-box {
      width: 160px;
      flex-shrink: 0;
      padding-top: 10px;
    }
  }
}
</style>
