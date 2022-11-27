<template>
  <div class="form-item" :class="[alignTop ? 'align-top' : '']">
    <label
      class="form-item-label"
      :style="{
        width: alignTop ? '100%' : labelWidth + 'px',
        display: alignTop ? 'block' : '',
        paddingBottom: alignTop ? '5px' : '',
      }"
      >{{ labelText }}</label
    >
    <div
      class="form-item-content"
      :style="{ width: alignTop ? '100%' : `calc(100% - ${labelWidth}px)` }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "FormItem",
};
</script>

<script setup lang="ts">
defineProps({
  labelText: {
    type: String,
    default: undefined,
  },
  labelWidth: {
    type: String,
    default: "80",
  },
  alignTop: {
    type: Boolean,
    default: undefined,
  },
});
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
