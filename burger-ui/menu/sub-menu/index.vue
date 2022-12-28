<template>
  <li class="k-sub-menu" @click="visible = !visible">
    <span class="k-sub-menu-title">
      <slot name="title"></slot>
    </span>
    <img
      class="down"
      :class="visible ? 'up' : ''"
      src="../../assets/icon/arrow-bottom.svg"
      alt="arrow-bottom"
      width="16"
    />
  </li>
  <ul
    v-show="visible"
    ref="list"
    class="k-sub-menu-list"
    :class="visible ? 'show' : ''"
  >
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
