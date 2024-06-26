<template>
  <span class="burger-checkbox" :class="disabled ? 'disabled' : ''" @click="check">
    <span class="burger-checkbox-input" :class="modelValue ? 'checked' : ''">
      <span
        class="burger-checkbox-inner"
        :class="modelValue ? 'checked' : ''"
      ></span>
      <input v-show="false" type="checkbox" />
    </span>
    <span class="burger-checkbox-text" :class="[modelValue ? 'checked' : '']">
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
