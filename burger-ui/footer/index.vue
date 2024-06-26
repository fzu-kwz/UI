<template>
  <footer class="burger-footer" :style="{ height: height + 'px' }">
    <slot></slot>
  </footer>
</template>

<script lang="ts">
export default {
  name: "Footer",
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
