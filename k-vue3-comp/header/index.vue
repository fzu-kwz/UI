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
      type: Number,
      default: 48,
    },
  },
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
