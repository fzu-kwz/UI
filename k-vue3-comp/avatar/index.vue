<template>
  <span class="k-avatar" :class="[shape, size ? size : '']">
    <img v-if="(src && loaded)" :src="src" @error="loaded = false" />
    <img v-else-if="!loaded" src="../assets/img/error.png" />
    <slot v-else></slot>
  </span>
</template>

<script lang="ts">
export default {
  name: "Avatar",
};
</script>

<script setup lang="ts">
import { computed, ref, watch } from "vue";

const props = defineProps({
  shape: {
    type: String,
    default: "circle",
  },
  size: {
    type: String,
    default: undefined,
  },
  src: {
    type: String,
    default: undefined,
  },
});

const src = computed(() => {
  return props.src;
});
watch(src, () => {
  loaded.value = true;
});
// 是否加载成功
const loaded = ref(true);
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
