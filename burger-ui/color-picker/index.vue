<template>
  <span
    class="burger-color-picker"
    :class="[size ? size : '', disabled ? 'disabled' : '']"
    @click="show"
  >
    <span
      class="color-picker-inner"
      :class="[size ? size : '', disabled ? 'disabled' : '']"
      :style="{ backgroundColor: modelValue }"
    >
      <input
        v-show="false"
        ref="colorInput"
        type="color"
        v-model="modelValue"
      />
    </span>
  </span>
</template>

<script lang="ts">
export default {
  name: "ColorPicker",
};
</script>

<script setup lang="ts">
import { computed, ref } from "vue";

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

const colorInput = ref<HTMLElement>();
const show = () => {
  props.disabled ? "" : colorInput.value?.click();
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
