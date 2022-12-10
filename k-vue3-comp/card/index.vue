<template>
  <div class="k-card" :class="shadow + '-shadow'">
    <div class="k-card-header" ref="header" v-if="showHeader">
      <slot name="header"></slot>
    </div>
    <div class="k-card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Card",
  props: {
    shadow: {
      type: String,
      default: "always",
    },
  },
};
</script>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const header = ref<HTMLElement>();
const showHeader = ref(true);
onMounted(() => {
  showHeader.value = (header.value?.childNodes.length as number) > 2;
});
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
