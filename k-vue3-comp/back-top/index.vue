<template>
  <span class="back-top icon" v-show="visible" @click="backTop">
    <img
      src="../assets/icon/back-top.svg"
      alt="back-top"
      width="30"
      height="30"
    />
  </span>
</template>

<script lang="ts">
export default {
  name: "BackTop",
};
</script>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const props = defineProps({
  backTopNode: {
    type: [HTMLElement, Window],
    default: window,
  },
});

const visible = ref(false);
const scrollTop = ref<number>(0);

const handleScroll = () => {
  if (props.backTopNode === window) {
    scrollTop.value = document.documentElement.scrollTop;
  } else {
    scrollTop.value = (props.backTopNode as HTMLElement).scrollTop;
  }
  visible.value = scrollTop.value >= 200 ? true : false;
};

onMounted(() => {
  props.backTopNode.addEventListener("scroll", handleScroll, true);
});

onUnmounted(() => {
  props.backTopNode.removeEventListener("scroll", handleScroll);
});

const backTop = () => {
  props.backTopNode.scrollTo({
    top: 0,
    behavior: "smooth", // 平滑移动
  });
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
