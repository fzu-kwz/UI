<template>
  <span class="k-switch" :class="disabled ? 'disabled' : ''">
    <span
      v-if="closeText"
      class="k-switch-text close"
      :class="[!modelValue ? 'active' : '', disabled ? 'disabled' : '']"
      @click="disabled ? '' : (modelValue = false)"
      >{{ closeText }}</span
    >
    <span
      class="k-switch-inner"
      :class="[modelValue ? 'open' : 'close']"
      :style="{ backgroundColor: modelValue ? openColor : closeColor }"
      @click="disabled ? '' : (modelValue = !modelValue)"
    ></span>
    <span
      v-if="openText"
      class="k-switch-text open"
      :class="[modelValue ? 'active' : '', disabled ? 'disabled' : '']"
      @click="disabled ? '' : (modelValue = true)"
      >{{ openText }}</span
    >
  </span>
</template>

<script lang="ts">
export default {
  name: "Switch",
};
</script>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  closeText: {
    type: String,
    default: undefined,
  },
  openText: {
    type: String,
    default: undefined,
  },
  closeColor: {
    type: String,
    default: undefined,
  },
  openColor: {
    type: String,
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
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
