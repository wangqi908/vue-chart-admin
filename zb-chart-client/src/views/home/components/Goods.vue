<template>
  <div>
    <p>购买商品分布</p>
    <VeLine :data="data" :legend-visible="false"></VeLine>
  </div>
</template>

<script>
import VeLine from 'v-charts/lib/pie.common'
export default {
  props: ['data'],
  components: { VeLine }
}
</script>
