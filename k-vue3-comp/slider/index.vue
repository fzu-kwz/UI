<template>
  <div class="k-slider">
    <input
      v-model="modelValue"
      type="range"
      class="k-slider-inner"
      :max="max"
      :step="step"
      :disabled="disabled"
      :style="{
        background: disabled
          ? `linear-gradient(to right, #ccc 0%, #ccc ${ratio}%,
          #eee ${ratio}%, #eee ${100 - ratio}%)`
          : `linear-gradient(to right, #409eff 0%, #409eff ${ratio}%,
          #eee ${ratio}%, #eee ${100 - ratio}%)`,
      }"
    />
    <span class="k-slider-ratio">{{ ratio + "%" }}</span>
  </div>
</template>

<script lang="ts">
export default {
  name: "Slider",
};
</script>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: 0,
  },
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 100,
  },
  step: {
    type: Number,
    default: 1,
  },
  disabled: {
    type: Boolean,
    default: undefined,
  },
});

const emits = defineEmits(["update:modelValue", "change"]);

const modelValue = computed({
  get: () => props.modelValue as number,
  set: (value) => {
    emits("update:modelValue", value);
    emits("change", value);
  },
});

const ratio = computed(() => {
  return Math.floor((modelValue.value / props.max) * 100);
});
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
