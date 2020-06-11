<template>
  <div>
    <p>注册用户地区分布</p>

    <VeLine :data="data" :settings="chartSettings"></VeLine>
  </div>
</template>

<script>
import VeLine from 'v-charts/lib/map.common'
export default {
  components: { VeLine },
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