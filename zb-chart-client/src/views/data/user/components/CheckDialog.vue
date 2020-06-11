<template>
  <el-dialog title="查看" :visible.sync="myShow" width="80%" top="5vh" class="my-dialog">
    <el-form :model="ruleForm" label-width="140px">
      <el-form-item label="用户ID">{{ruleForm.userId}}</el-form-item>
      <el-form-item label="昵称">{{ruleForm.nickname}}</el-form-item>
      <el-form-item label="手机号">{{ruleForm.phone}}</el-form-item>
      <el-form-item label="最近采集号码">{{ruleForm.latestNumber}}</el-form-item>
      <el-form-item label="邮箱">{{ruleForm.email}}</el-form-item>
      <el-form-item label="微信号">{{ruleForm.wechatNo}}</el-form-item>
      <el-form-item label="生日">{{ruleForm.birthday}}</el-form-item>
      <el-form-item label="性别">{{ruleForm.gender}}</el-form-item>
      <el-form-item label="年龄">{{ruleForm.age}}</el-form-item>
      <el-form-item label="语言">{{ruleForm.language}}</el-form-item>
      <el-form-item label="国家">{{ruleForm.country}}</el-form-item>
      <el-form-item label="省份">{{ruleForm.province}}</el-form-item>
      <el-form-item label="城市">{{ruleForm.city}}</el-form-item>
      <el-form-item label="地址">{{ruleForm.address}}</el-form-item>
      <el-form-item label="行业">{{ruleForm.industry}}</el-form-item>
      <el-form-item label="公司">{{ruleForm.company}}</el-form-item>
      <el-form-item label="兴趣">{{ruleForm.interest}}</el-form-item>
      <el-form-item label="注册时间">{{ruleForm.registerTime|YMDTimeFilter}}</el-form-item>
      <el-form-item label="消费金额">{{ruleForm.consumptionAmount}}</el-form-item>
      <el-form-item label="最近一次消费时间">{{ruleForm.lastConsumptionTime|YMDTimeFilter}}</el-form-item>
      <el-form-item label="购买商品">{{ruleForm.goods}}</el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import { userViewReq } from '@/api'
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
      const res = await userViewReq({ _id: this.id })
      if (res.data.status === 200) {
        this.ruleForm = res.data.data
      }
    }
  },
  created() {
    this.getInfo()
  }
}
</script>
