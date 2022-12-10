<template>
  <div class="k-skeleton">
    <div
      v-if="loading"
      v-for="item in rows"
      class="k-skeleton-bar"
      :class="rowCount"
    ></div>
    <slot v-else></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "Skeleton",
};
</script>

<script setup lang="ts">
import { computed, ref, watch } from "vue";

const props = defineProps({
  rows: {
    type: Number,
    default: 4,
  },
  loading: {
    type: Boolean,
    default: true,
  },
  delay: {
    type: Number,
    defaule: 0,
  },
});

const loading = ref(props.loading);

const rowCount = computed(() => {
  return props.rows === 1 ? "one-row" : props.rows === 2 ? "two-row" : "";
});

watch(props, () => {
  if (!props.loading) {
    setTimeout(() => {
      loading.value = false;
    }, props.delay);
  } else {
    loading.value = true;
  }
});
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
