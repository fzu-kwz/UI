<template>
  <Teleport :to="to">
    <div class="mask" :style="{ background: background }">
      <span class="k-loading">
        <img
          src="../assets/icon/loading.svg"
          alt="loading"
          width="30"
          height="30"
        />
        <span class="k-loading-text" v-if="text">
          {{ text }}
        </span>
      </span>
    </div>
  </Teleport>
</template>

<script lang="ts">
export default {
  name: "Loading",
  props: {
    to: {
      type: [String, HTMLElement],
      default: "body",
    },
    text: {
      type: String,
      default: "加载中",
    },
    background: {
      type: String,
      default: "rgba(0, 0, 0, 0.3)",
    },
  },
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
