<template>
  <Teleport :to="to">
    <div class="mask">
      <span class="loading">
        <img
          src="../assets/icon/loading.svg"
          alt="loading"
          width="30"
          height="30"
        />
        <span class="loading-text" v-if="text">
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
      default: "加载中······",
    },
  },
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
