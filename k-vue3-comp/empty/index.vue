<template>
  <div class="empty">
    <img src="../assets/icon/no-data.svg" alt="no-data" />
    <span v-if="text">
      {{ text }}
    </span>
  </div>
</template>

<script lang="ts">
export default {
  name: "Empty",
  props: {
    text: {
      type: String,
      default: "No Data",
    },
  },
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
