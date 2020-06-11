<template>
  <div>
    <p>注册用户地区分布</p>

    <ve-map :data="data" :settings="chartSettings"></ve-map>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartSettings: {
        position: 'china',
        label: false,
        itemStyle: {
          normal: {
            borderColor: '#00f'
          }
        }
      }
    }
  },
  props: ['data']
}
</script>