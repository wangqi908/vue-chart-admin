<template>
  <div>
    <p>注册用户</p>
    <!-- <ve-line :data="data"></ve-line> -->
    <VeLine :data="data"></VeLine>
  </div>
</template>

<script>
import VeLine from 'v-charts/lib/line.common'
export default {
  props: ['data'],
  components: { VeLine }
}
</script>