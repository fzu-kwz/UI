<template>
  <span class="avatar" :class="[shape, size ? size : '']">
    <img
      v-if="src"
      :src="src"
      :alt="alt"
      @error="(src = ''), (loadErr = true)"
    />
    <img v-else-if="loadErr" src="../assets/img/error.png" />
    <slot v-else></slot>
  </span>
</template>

<script lang="ts">
export default {
  name: "Avatar",
};
</script>

<script setup lang="ts">
import { ref } from "vue";

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
  alt: {
    type: String,
    default: undefined,
  },
});

const src = ref();
src.value = props.src;

const loadErr = ref(false);
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
