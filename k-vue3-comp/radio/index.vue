<template>
  <span class="radio" :class="disabled ? 'disabled' : ''" @click="check">
    <input
      class="radio-input"
      type="radio"
      :checked="modelValue === value"
      :disabled="disabled"
      @click=""
    />
    <label class="radio-label" :class="disabled ? 'disabled' : ''">
      <slot></slot>
    </label>
  </span>
</template>

<script lang="ts">
export default {
  name: "Radio",
};
</script>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: [String, Number, Boolean],
    default: undefined,
  },
  value: {
    type: [String, Number, Boolean],
    default: undefined,
  },
  disabled: {
    type: Boolean,
    default: undefined,
  },
});

const emits = defineEmits(["update:modelValue"]);

const check = () => {
  props.disabled ? "" : emits("update:modelValue", props.value);
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
