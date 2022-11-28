<template>
  <header class="k-header" :style="{ height: height + 'px' }">
    <slot></slot>
  </header>
</template>

<script lang="ts">
export default {
  name: "Header",
  props: {
    height: {
      type: String,
      default: "48",
    },
  },
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
