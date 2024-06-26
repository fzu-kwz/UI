<template>
  <div class="burger-form" :class="[border ? 'border' : '']">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Form',
};
</script>

<script setup lang="ts">
import { provide } from 'vue';

const props = defineProps({
  border: {
    type: Boolean,
    default: undefined,
  },
  alignTop: {
    type: Boolean,
    default: undefined,
  },
  labelWidth: {
    type: [String, Number],
    default: '60px',
  },
});

provide('alignTop', props.alignTop);
provide('labelWidth', props.labelWidth);
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
