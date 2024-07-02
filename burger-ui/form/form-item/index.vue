<template>
  <div class="burger-form-item" :class="[labelTop ? 'align-top' : '']">
    <span
      class="burger-form-item-label"
      :style="{
        width: labelTop ? '100%' : processedLabelWidth,
        display: labelTop ? 'block' : '',
        paddingBottom: labelTop ? '5px' : '',
      }"
    >
      <slot name="label">{{ label }}{{ suffix }}</slot>
    </span>
    <div
      class="burger-form-item-content"
      :style="{
        width: labelTop ? '100%' : `calc(100% - ${processedLabelWidth})`,
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
import { processedCssPx } from '$/utils';
import { computed, inject, useSlots } from 'vue';
import { FormProps, LabelPosition } from '../types';

const props = defineProps({
  label: {
    type: String,
    default: undefined,
  },
  prop: {
    type: String,
    default: undefined,
  },
});

const slots = useSlots();
const hasLabel = slots?.label && slots?.label().length !== 0;

// 注入formProps
const formProps = inject<FormProps>('formProps');

// 计算label宽度
const processedLabelWidth = computed(() => {
  return processedCssPx(formProps?.labelWidth!);
});

// 判断label是否是顶部对齐
const labelTop = computed(
  () => formProps?.alignTop || formProps?.labelPosition === LabelPosition.TOP
);

// 获取label后缀
const labelSuffix = computed(() => formProps?.labelSuffix);

// 获取是否显示后缀
const showSuffix = computed(() => formProps?.showSuffix);

// 获取后缀
const suffix = computed(() => {
  if (!showSuffix.value) return '';
  if (hasLabel) {
    return labelSuffix.value;
  } else {
    if (
      props.label &&
      props.label.length !== 0 &&
      !props.label?.endsWith(labelSuffix.value!)
    ) {
      return labelSuffix.value;
    } else {
      return '';
    }
  }
});
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
