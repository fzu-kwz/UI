<template>
  <div class="burger-slider">
    <input
      v-model="modelValue"
      type="range"
      class="burger-slider-inner"
      :min="min"
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
    <span class="burger-slider-range min" v-if="showRange">{{ min + unit }}</span>
    <span class="burger-slider-range max" v-if="showRange">{{ max + unit }}</span>
    <span class="burger-slider-value">{{ modelValue + unit }}</span>
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
  unit: {
    type: String,
    default: "",
  },
  showRange: {
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
  return ((modelValue.value - props.min) / (props.max - props.min)) * 100;
});
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
