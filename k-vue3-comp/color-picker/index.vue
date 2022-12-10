<template>
  <div class="k-color-picker">
    <input
      type="color"
      class="color-picker-inner"
      :class="size ? size : ''"
      v-model="modelValue"
      :disabled="disabled"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: "ColorPicker",
};
</script>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: "#ffffff",
  },
  disabled: {
    type: Boolean,
    default: undefined,
  },
  size: {
    type: String,
    default: undefined,
  },
});
const emits = defineEmits(["update:modelValue"]);
const modelValue = computed({
  get: () => props.modelValue,
  set: (value) => emits("update:modelValue", value),
});
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
