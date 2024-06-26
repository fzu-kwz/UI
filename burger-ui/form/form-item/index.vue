<template>
  <div
    ref="formItem"
    class="burger-form-item"
    :class="[alignTop ? 'align-top' : '']"
  >
    <span
      class="burger-form-item-label"
      :style="{
        width: alignTop ? '100%' : processedLabelWidth,
        display: alignTop ? 'block' : '',
        paddingBottom: alignTop ? '5px' : '',
      }"
    >
      {{ labelText }}
    </span>
    <div
      class="burger-form-item-content"
      :style="{
        width: alignTop ? '100%' : `calc(100% - ${processedLabelWidth})`,
      }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'FormItem',
};
</script>

<script setup lang="ts">
import { computed, inject, ref } from 'vue';
import { processedCssPx } from '$/utils';

const props = defineProps({
  labelText: {
    type: String,
    default: undefined,
  },
});

const formItem = ref<HTMLElement>();

const alignTop = inject('alignTop');

const labelWidth = inject<string | number>('labelWidth');
console.log(labelWidth);

const processedLabelWidth = computed(() => {
  return processedCssPx(labelWidth!);
});
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
