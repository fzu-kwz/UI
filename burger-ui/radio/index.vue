<template>
  <span class="burger-radio" :class="disabled ? 'disabled' : ''" @click="check">
    <span class="burger-radio-input" :class="checked ? 'checked' : ''">
      <span class="burger-radio-inner" :class="checked ? 'checked' : ''"></span>
      <input v-show="false" type="radio" :value="value" />
    </span>
    <span class="burger-radio-text" :class="[checked ? 'checked' : '']">
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
