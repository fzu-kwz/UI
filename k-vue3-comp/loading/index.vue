<template>
  <span class="loading">
    <img
      src="../assets/icon/loading.svg"
      alt="loading"
      :width="width"
      :height="height"
    />
  </span>
</template>

<script lang="ts">
export default {
  name: "Loading",
  props: {
    width: {
      type: Number,
      default: 30,
    },
    height: {
      type: Number,
      default: 30,
    },
  },
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
