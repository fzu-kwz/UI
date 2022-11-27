<template>
  <button
    class="k-button"
    :class="[type ? 'k-button-' + type : '', size ? 'k-button-' + size : '']"
  >
    <slot>默认按钮</slot>
  </button>
</template>

<script lang="ts">
export default {
  name: "KButton",
};
</script>

<script setup lang="ts">
defineProps({
  type: {
    type: String,
    default: undefined,
  },
  size: {
    type: String,
    default: undefined,
  },
});
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
