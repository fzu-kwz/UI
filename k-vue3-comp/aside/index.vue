<template>
  <aside class="k-aside" :style="{ width: width + 'px' }">
    <slot></slot>
  </aside>
</template>

<script lang="ts">
export default {
  name: "Aside",
  props: {
    width: {
      type: String,
      default: undefined,
    },
  },
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
