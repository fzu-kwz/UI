<template>
  <li class="menu-item" tabindex="-1" ref="menu-item">
    <router-link v-if="route" class="menu-item-title" :to="route">
      <slot name="title"></slot>
    </router-link>
    <span v-else class="menu-item-title"><slot name="title"></slot></span>
  </li>
</template>

<script lang="ts">
export default {
  name: "MenuItem",
};
</script>

<script setup lang="ts">
import { ComponentInternalInstance, getCurrentInstance, onMounted } from "vue";

const { proxy } = getCurrentInstance() as ComponentInternalInstance;

defineProps({
  route: {
    type: String,
    default: undefined,
  },
});

onMounted(() => {
  const menuItem = proxy?.$refs["menu-item"] as HTMLElement;
  if (menuItem.parentElement?.className.includes("sub-menu")) {
    menuItem.style.padding = "0 40px";
  }
});
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
