<template>
  <div
    ref="formItem"
    class="k-form-item"
    :class="[alignTop ? 'align-top' : '']"
  >
    <span
      class="k-form-item-label"
      :style="{
        width: alignTop ? '100%' : labelWidth + 'px',
        display: alignTop ? 'block' : '',
        paddingBottom: alignTop ? '5px' : '',
      }"
    >
      {{ labelText }}
    </span>
    <div
      class="k-form-item-content"
      :style="{ width: alignTop ? '100%' : `calc(100% - ${labelWidth}px)` }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "FormItem",
};
</script>

<script setup lang="ts">
import { computed, ref } from "vue";

defineProps({
  labelText: {
    type: String,
    default: undefined,
  },
  labelWidth: {
    type: String,
    default: "60",
  },
});

const formItem = ref<HTMLElement>();

const alignTop = computed(() => {
  return formItem.value?.parentElement?.className.includes("align-top");
});
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
