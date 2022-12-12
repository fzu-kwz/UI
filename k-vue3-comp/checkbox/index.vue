<template>
  <span class="k-checkbox" @click="check">
    <input
      type="checkbox"
      class="k-checkbox-input"
      :checked="modelValue"
      :disabled="disabled"
    />
    <span
      class="k-checkbox-text"
      :class="[modelValue ? 'checked' : '', disabled ? 'disabled' : '']"
    >
      <slot></slot>
    </span>
  </span>
</template>

<script lang="ts">
export default {
  name: "Chechbox",
};
</script>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: undefined,
  },
  disabled: {
    type: Boolean,
    default: undefined,
  },
});

const emits = defineEmits(["update:modelValue", "change"]);

const check = () => {
  props.disabled ? "" : emits("update:modelValue", !props.modelValue),
    emits("change", !props.modelValue);
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
