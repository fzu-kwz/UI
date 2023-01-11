<template>
  <Teleport :to="target">
    <div class="mask" :style="{ background: background }" v-if="loading">
      <div class="k-loading">
        <img
          src="../assets/icon/loading.svg"
          alt="loading"
          width="30"
          height="30"
        />
        <p class="k-loading-text" v-if="text">
          {{ text }}
        </p>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts">
export default {
  name: "Loading",
};
</script>

<script lang="ts" setup>
import { ref, watch } from "vue";

const props = defineProps({
  target: {
    type: [String, HTMLElement],
    default: "body",
  },
  loading: {
    type: Boolean,
    default: true,
  },
  text: {
    type: String,
    default: "加载中",
  },
  background: {
    type: String,
    default: "",
  },
  delay: {
    type: Number,
    defaule: 0,
  },
});

const loading = ref(props.loading);

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
