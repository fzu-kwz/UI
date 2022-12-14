<template>
  <div
    class="k-form"
    :class="[border ? 'border' : '', alignTop ? 'align-top' : '']"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "Form",
};
</script>

<script setup lang="ts">
defineProps({
  border: {
    type: Boolean,
    default: undefined,
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
