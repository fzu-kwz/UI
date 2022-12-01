<template>
  <div class="color-picker">
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
import { watch } from "vue";

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
watch(props, () => {
  emits("update:modelValue", props.modelValue);
});
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
