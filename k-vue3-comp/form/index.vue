<template>
  <div class="form" :class="[frame ? 'frame' : '']">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "KForm",
};
</script>

<script setup lang="ts">
defineProps({
  frame: {
    type: Boolean,
    default: undefined,
  },
});
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
