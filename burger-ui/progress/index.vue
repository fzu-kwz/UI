<template>
  <span class="burger-progress">
    <span class="burger-progress-bar" :style="{ height: height + 'px' }">
      <span
        class="burger-progress-value"
        :style="{
          width: ratio,
          backgroundColor: color,
          lineHeight: height + 'px',
        }"
        :class="type ? type : ''"
      >
        <span
          v-if="textInside"
          class="burger-progress-ratio-inner"
        >
          {{ ratio }}
        </span>
      </span>
    </span>
    <span v-if="!textInside" class="burger-progress-ratio">{{ ratio }}</span>
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
  color: {
    type: [String, Function],
    default: undefined,
  },
  height: {
    type: Number,
    default: 8,
  },
  textInside: {
    type: Boolean,
    default: false,
  },
});

const ratio = computed(() => {
  return (props.value / props.total) * 100 + "%";
});

const color = computed(() => {
  if (typeof props.color === "string") {
    return props.color;
  }
  if (typeof props.color === "function") {
    return props.color(props.value);
  }
});
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
