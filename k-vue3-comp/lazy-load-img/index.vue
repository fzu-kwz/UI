<template>
  <img
    ref="img"
    :data-src="src"
    src="../assets/gif/loading.gif"
    alt="lazy-load-img"
    :width="width"
    :height="height"
  />
</template>

<script lang="ts">
export default {
  name: "LazyLoadImg",
};
</script>

<script setup lang="ts">
import {
  ComponentInternalInstance,
  getCurrentInstance,
  onMounted,
  onUnmounted,
  ref,
  watch,
} from "vue";

const props = defineProps({
  src: {
    type: String,
    default: "",
  },
  width: {
    type: Number,
    default: 200,
  },
  height: {
    type: Number,
    default: 200,
  },
  scrollNode: {
    type: [HTMLElement, Window],
    default: window,
  },
});

const { proxy } = getCurrentInstance() as ComponentInternalInstance;

// 窗口视高
const windowHeight = window.innerHeight;

// 滚动元素视高
const scrollViewHeight = ref();

// 最小视高
const short = ref();
short.value = windowHeight;

const lazyload = () => {
  const img = proxy?.$refs["img"] as HTMLElement;
  // 图片距离顶部高度小于视高，即图片进入可视范围
  if (img.getBoundingClientRect().top < short.value) {
    setTimeout(() => {
      img.setAttribute("src", img.getAttribute("data-src") as string);
    }, 500);
  }
};

// 子组件比父组件先渲染，onMounted中拿不到scrollNode，所以要监听props变化后再监听滚动
watch(props, () => {
  scrollViewHeight.value =
    (props.scrollNode as HTMLElement).offsetTop +
    parseInt(
      window
        .getComputedStyle(props.scrollNode as HTMLElement)
        .getPropertyValue("height")
    );

  short.value =
    scrollViewHeight.value < windowHeight
      ? scrollViewHeight.value
      : windowHeight;

  lazyload();
  props.scrollNode.addEventListener("scroll", () => {
    lazyload();
  });
});

onMounted(() => {
  lazyload();
  props.scrollNode.addEventListener("scroll", () => {
    lazyload();
  });
});

onUnmounted(() => {
  props.scrollNode.removeEventListener("scroll", () => {
    lazyload();
  });
});
</script>

<style scoped></style>
