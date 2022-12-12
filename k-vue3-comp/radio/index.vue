<template>
  <span class="k-radio" :class="disabled ? 'disabled' : ''" @click="check">
    <input
      class="k-radio-input"
      type="radio"
      :checked="checked"
      :disabled="disabled"
    />
    <span
      class="k-radio-text"
      :class="[checked ? 'checked' : '', disabled ? 'disabled' : '']"
    >
      <slot></slot>
    </span>
  </span>
</template>

<script lang="ts">
export default {
  name: "Radio",
};
</script>

<script setup lang="ts">
import { computed } from "vue";

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

const checked = computed(() => {
  if (!props.modelValue) return false;
  else if (!props.value) return false;
  else if (props.modelValue !== props.value) return false;
  else return true;
});

const check = () => {
  props.disabled ? "" : emits("update:modelValue", props.value);
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
