<template>
  <aside class="k-aside" :style="{ width: width ? width + 'px' : '' }">
    <slot></slot>
  </aside>
</template>

<script lang="ts">
export default {
  name: "Aside",
  props: {
    width: {
      type: Number,
      default: undefined,
    },
  },
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
