<template>
  <aside :style="{ width: width + 'px' }">
    <slot></slot>
  </aside>
</template>

<script lang="ts">
export default {
  name: "Aside",
  props: {
    width: {
      type: String,
      default: "200",
    },
  },
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
