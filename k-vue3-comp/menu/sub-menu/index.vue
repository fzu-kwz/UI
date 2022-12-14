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
  <ul ref="list" class="k-sub-menu-list">
    <slot></slot>
  </ul>
</template>

<script lang="ts">
export default {
  name: "SubMenu",
};
</script>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";

const visible = ref(false);

const list = ref<HTMLElement>();
const listHeight = ref();
onMounted(() => {
  listHeight.value = list.value?.offsetHeight + "px";
  (list.value as HTMLElement).style.height = "0";
});

watch(visible, () => {
  (list.value as HTMLElement).style.height = visible.value
    ? listHeight.value
    : "0";
});
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
