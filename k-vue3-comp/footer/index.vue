<template>
  <footer class="k-footer" :style="{ height: height + 'px' }">
    <slot></slot>
  </footer>
</template>

<script lang="ts">
export default {
  name: "Footer",
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
