<template>
  <Teleport :to="to">
    <div class="mask">
      <span class="loading">
        <img
          src="../assets/icon/loading.svg"
          alt="loading"
          :width="width"
          :height="height"
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
      default: "",
    },
    width: {
      type: Number,
      default: 30,
    },
    height: {
      type: Number,
      default: 30,
    },
  },
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
