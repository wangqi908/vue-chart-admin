<template>
  <div>
    <p>购买商品分布</p>
    <ve-pie :data="data" :legend-visible="false"></ve-pie>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>
