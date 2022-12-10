<template>
  <span class="k-progress">
    <span class="k-progress-bar">
      <span
        class="k-progress-value"
        :style="{ width: ratio }"
        :class="type ? type : ''"
      ></span>
    </span>
    <span class="k-progress-ratio">{{ ratio }}</span>
  </span>
</template>

<script lang="ts">
export default {
  name: "Progress",
};
</script>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "primary",
  },
  value: {
    type: Number,
    default: 0,
  },
  total: {
    type: Number,
    default: 100,
  },
});

const ratio = computed(() => {
  return (props.value / props.total) * 100 + "%";
});
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
