<template>
  <button
    class="k-button"
    :class="[
      type ? 'k-button-' + type : '',
      size ? 'k-button-' + size : '',
      round ? 'k-button-round' : '',
      circle ? 'k-button-circle' : '',
      disabled ? 'disabled' : '',
    ]"
    type="button"
    :disabled="disabled"
  >
    <slot>默认按钮</slot>
  </button>
</template>

<script lang="ts">
export default {
  name: "Button",
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
  round: {
    type: Boolean,
    default: undefined,
  },
  circle: {
    type: Boolean,
    default: undefined,
  },
  disabled: {
    type: Boolean,
    default: undefined,
  },
});
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
