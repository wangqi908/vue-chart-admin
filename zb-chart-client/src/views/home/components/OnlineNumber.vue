<template>
  <ve-histogram :data="chartData"></ve-histogram>
</template>

<script>
export default {
  data() {
    return {
      chartData: {
        columns: ['日期', '在线人数'],
        rows: [
          {
            在线人数: 1523,
            日期: '01/01'
          },
          {
            在线人数: 1223,
            日期: '01/02'
          },
          {
            在线人数: 2123,
            日期: '01/03'
          },
          {
            在线人数: 4123,
            日期: '01/04'
          }
        ]
      }
    }
  }
}
</script>