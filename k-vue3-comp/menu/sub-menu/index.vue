<template>
  <li class="sub-menu-item" @click="visible = !visible">
    <span>
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
  <ul v-if="visible" class="sub-menu">
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
