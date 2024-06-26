<template>
  <div class="burger-card" :class="shadow + '-shadow'">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "Card",
  props: {
    shadow: {
      type: String,
      default: "always",
    },
  },
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
