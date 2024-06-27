<template>
  <button
    class="burger-button"
    :class="[
      type ? 'burger-button-' + type : '',
      size ? 'burger-button-' + size : '',
      round ? 'burger-button-round' : '',
      circle ? 'burger-button-circle' : '',
      disabled ? 'disabled' : '',
    ]"
    type="button"
    :disabled="disabled"
    @click="emits('click')"
  >
    <slot>默认按钮</slot>
  </button>
</template>

<script lang="ts">
export default {
  name: 'Button',
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

const emits = defineEmits(['click']);
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
