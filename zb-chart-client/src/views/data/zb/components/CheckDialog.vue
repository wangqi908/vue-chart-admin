<template>
  <el-dialog title="查看" :visible.sync="myShow" width="80%" top="5vh" class="my-dialog">
    <el-form :model="ruleForm" label-width="120px">
      <el-form-item label="用户姓名">{{ruleForm.username}}</el-form-item>
      <el-form-item label="昵称">{{ruleForm.nickname}}</el-form-item>
      <el-form-item label="手机号">{{ruleForm.phone}}</el-form-item>
      <el-form-item label="邮箱">{{ruleForm.email}}</el-form-item>
      <el-form-item label="地址">{{ruleForm.address}}</el-form-item>
      <el-form-item label="总在线时长">{{ruleForm.onlineTime}}</el-form-item>
      <el-form-item label="学习时长">{{ruleForm.studyTime}}</el-form-item>
      <el-form-item label="首次进入时间">{{ruleForm.enterTime|YMDTimeFilter}}</el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import { zbViewReq } from '@/api'
import toggleDialogMixin from '@/mixin/toggleDialogMixin'

export default {
  mixins: [toggleDialogMixin],
  props: {
    id: {
      type: [Number, String],
      required: true
    }
  },
  data() {
    return {
      ruleForm: {}
    }
  },
  methods: {
    async getInfo() {
      const res = await zbViewReq({ _id: this.id })
      if (res.data.code === 200) {
        this.ruleForm = res.data.data
      }
    }
  },
  created() {
    this.getInfo()
  }
}
</script>
