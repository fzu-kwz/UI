<template>
  <div class="k-counter">
    <button
      class="k-counter-btn add"
      :class="size"
      :disabled="disabled || modelValue === props.max"
      @click="add"
    >
      <img src="../assets/icon/plus-sign.svg" alt="plus-sign" />
    </button>
    <button
      class="k-counter-btn reduce"
      :class="size"
      :disabled="disabled || modelValue === props.min"
      @click="reduce"
    >
      <img src="../assets/icon/minus-sign.svg" alt="minus-sign" />
    </button>
    <Input
      v-model="modelValue"
      :min="min"
      :max="max"
      :step="step"
      :size="size"
      :disabled="disabled"
      readonly
    ></Input>
  </div>
</template>

<script lang="ts">
export default {
  name: "Counter",
};
</script>

<script setup lang="ts">
import { computed } from "vue";
import { Input } from "../index";

const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: Infinity,
  },
  min: {
    type: Number,
    default: -Infinity,
  },
  step: {
    type: Number,
    default: 1,
  },
  size: {
    type: String,
    default: undefined,
  },
  disabled: {
    type: Boolean,
    default: undefined,
  },
});

const emits = defineEmits(["update:modelValue", "change"]);

const modelValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    emits("update:modelValue", value);
    emits("change", value);
  },
});

const add = () => {
  if ((modelValue.value as number) >= (props.max as number)) return;
  if ((modelValue.value as number) + props.step >= (props.max as number))
    return (modelValue.value = props.max);
  (modelValue.value as number) += props.step;
};
const reduce = () => {
  if ((modelValue.value as number) <= (props.min as number)) return;
  if ((modelValue.value as number) - props.step <= (props.min as number))
    return (modelValue.value = props.min);
  (modelValue.value as number) -= props.step;
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
