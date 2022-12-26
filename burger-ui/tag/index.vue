<template>
  <span class="k-tag" :class="[type, size]" @click.self="emits('click')">
    <slot>默认标签</slot>
    <span v-if="showClose" class="close" @click="emits('close')">×</span>
  </span>
</template>

<script lang="ts">
export default {
  name: "Tag",
};
</script>

<script setup lang="ts">
defineProps({
  type: {
    type: String,
    default: undefined,
  },
  size: {
    type: String,
    default: undefined,
  },
  showClose: {
    type: Boolean,
    default: undefined,
  },
});

const emits = defineEmits(["click", "close"]);
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
