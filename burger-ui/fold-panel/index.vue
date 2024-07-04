<template>
  <div class="burger-fold-panel">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "FoldPanel",
};
</script>

<script setup lang="ts">
import { provide } from "vue";

const props = defineProps({
  modelValue: {
    type: [String, Array<string | number>],
    default: [],
  },
  accordion: {
    type: Boolean,
    default: false,
  },
});

const updateModelValue = () => {};

provide("foldPanelProps", props);
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
