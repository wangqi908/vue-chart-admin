<template>
  <div class="page-box">
    <SearchBox :propSearchData.sync="searchData">
      <div class="getCenter">
        <el-button type="primary" @click="search">搜索</el-button>
        <el-button type="primary" @click="reset">重置</el-button>
      </div>
    </SearchBox>
    <div class="table">
      <div class="table-btn">
        <InsertBtn @sucess="sucess" />
      </div>
      <el-table :data="info.list" style="width: 100%">
        <el-table-column prop="username" label="用户姓名" show-overflow-tooltip></el-table-column>
        <el-table-column prop="nickname" label="昵称" show-overflow-tooltip></el-table-column>
        <el-table-column prop="onlineTime" label="总在线时长" show-overflow-tooltip></el-table-column>
        <el-table-column prop="studyTime" label="学习时长" show-overflow-tooltip></el-table-column>

        <el-table-column label="首次进入时间" show-overflow-tooltip>
          <template slot-scope="scope">{{scope.row.enterTime|allTimeFilter}}</template>
        </el-table-column>

        <el-table-column fixed="right" label="操作" min-width="50" class="test">
          <template slot-scope="scope">
            <el-button @click="check(scope.row)" type="text" size="small">查看</el-button>
          </template>
        </el-table-column>
      </el-table>

      <MyPagination
        :total="info.count"
        :currentPage.sync="currentPage"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
import { zbPageReq } from '@api'
import { InsertBtn } from './components'
import pageMixin from '@/mixin/pageMixin'
export default {
  mixins: [pageMixin],
  components: { InsertBtn },
  data() {
    return {
      searchData: {
        nickname: '',
        username: ''
      }
    }
  },
  methods: {
    check(val) {
      console.log(val)
    },

    sucess() {
      this.search()
    },

    //请求表格数据
    async renderTable() {
      let { pageNum, pageSize } = this
      let { nickname, username } = this.searchData
      let dataObj = {
        pageSize,
        pageNum,
        data: {
          nickname,
          username
        }
      }
      const res = await zbPageReq(dataObj)
      if (res.data.code == 200) {
        this.info = res.data.data
      }
    }
  },
  created() {
    this.renderTable()
  }
}
</script>
