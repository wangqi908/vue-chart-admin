<template>
  <div>
    <label for="fileInput">
      <div class="btn">导入表格</div>
    </label>
    <input type="file" ref="upload" @change="readExcel" id="fileInput" />
  </div>
</template>

<script>
import XLSX from 'xlsx'
import { zbInsertReq } from '@api'
export default {
  methods: {
    readExcel(e) {
      const files = e.target.files
      if (files.length <= 0) {
        return false
      } else if (!/\.(xls|xlsx)$/.test(files[0].name.toLowerCase())) {
        this.$message.warning(
          '上传格式不正确，请讲文件转换为xls或xlsx格式再进行上传'
        )
        return false
      }

      const fileReader = new FileReader()
      fileReader.onload = ev => {
        try {
          const data = ev.target.result
          const workbook = XLSX.read(data, {
            type: 'binary',
            codepage: 936
          })
          const wsname = workbook.SheetNames[0] //取第一张表
          const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]) //生成json表格内容

          let outputs = []
          ws.forEach(ele => {
            let obj = {
              username: ele['用户姓名'],
              nickname: ele['昵称'],
              phone: ele['手机号'],
              email: ele['邮箱'],
              address: ele['地址'],
              onlineTime: ele['总在线时长'],
              studyTime: ele['学习时长'],
              enterTime: +new Date(ele['首次进入时间'])
            }
            for (const key in obj) {
              const element = obj[key]
              if (!element) {
                obj[key] = ''
              }
            }
            let isObjValueAllEmpty = Object.values(obj).every(v => v === '') //判断对象的值全为空
            if (!isObjValueAllEmpty) outputs.push(obj)
          })
          // this.tableData = outputs
          this.$refs.upload.value = ''

          this.upload(outputs)
        } catch (e) {
          console.log(e)
          return false
        }
      }
      fileReader.readAsBinaryString(files[0])
    },
    async upload(list) {
      const res = await zbInsertReq({ list })
      if (res.data.status === 200) {
        this.$emit('sucess')
      }
    }
  }
}
</script>

<style lang='scss'>
.btn {
  color: #12a9ee;
  font-size: 12px;
  padding: 10px 4px;
  width: fit-content;
  user-select: none;
  cursor: pointer;
  &:hover {
    color: #36b6f1;
  }
  &:active {
    color: rgb(32, 167, 230);
  }
}
input {
  display: none;
}
</style>