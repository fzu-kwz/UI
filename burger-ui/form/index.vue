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
import { PropType, provide } from 'vue';
import { LabelPosition } from './types';

const props = defineProps({
  border: {
    type: Boolean,
    default: undefined,
  },
  alignTop: {
    type: Boolean,
    default: undefined,
  },
  labelPosition: {
    type: String as PropType<LabelPosition>,
    default: LabelPosition.LEFT,
  },
  labelWidth: {
    type: [String, Number],
    default: '60px',
  },
  labelSuffix: {
    type: String,
    default: ' : ',
  },
  showSuffix: {
    type: Boolean,
    default: true,
  },
});

provide('formProps', props);
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
