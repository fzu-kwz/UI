<template>
  <li
    class="menu-item"
    tabindex="-1"
    ref="menu-item"
    @click="route ? router.push(route) : ''"
  >
    <span class="menu-item-title"><slot name="title"></slot></span>
  </li>
</template>

<script lang="ts">
export default {
  name: "MenuItem",
};
</script>

<script setup lang="ts">
import { ComponentInternalInstance, getCurrentInstance, onMounted } from "vue";
import { useRouter } from "vue-router";

defineProps({
  route: {
    type: String,
    default: undefined,
  },
});

const { proxy } = getCurrentInstance() as ComponentInternalInstance;

const router = useRouter();

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
