<template>
  <li class="k-sub-menu" @click="visible = !visible">
    <span class="k-sub-menu-title">
      <slot name="title"></slot>
    </span>
    <img
      class="down"
      :class="visible ? 'up' : ''"
      src="../../assets/icon/down.svg"
      alt="down"
      width="14"
      height="14"
    />
  </li>
  <ul v-if="visible" class="k-sub-menu-list">
    <slot></slot>
  </ul>
</template>

<script lang="ts">
export default {
  name: "SubMenu",
};
</script>

<script setup lang="ts">
import { ref } from "vue";

const visible = ref(false);
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
