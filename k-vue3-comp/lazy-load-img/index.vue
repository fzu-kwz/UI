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

<!-- Bug：在一个比视口高度小的滚动元素中，其中在视口内的懒加载图片会加载 -->
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
  target: {
    type: [HTMLElement, Window],
    default: window,
  },
});

const { proxy } = getCurrentInstance() as ComponentInternalInstance;

// 视口高度
const viewHeight = ref(
  (props.target as HTMLElement).offsetTop +
    parseInt(
      window
        .getComputedStyle(props.target as HTMLElement)
        .getPropertyValue("height")
    )
);

const lazyload = () => {
  const img = proxy?.$refs["img"] as HTMLElement;
  // 图片距离顶部高度小于视高，即图片进入可视范围
  if (img?.getBoundingClientRect().top < viewHeight.value) {
    setTimeout(() => {
      img.setAttribute("src", img.getAttribute("data-src") as string);
    }, 500);
  }
};

onMounted(() => {
  lazyload();
  props.target.addEventListener("scroll", () => {
    lazyload();
  });
});

onUnmounted(() => {
  props.target.removeEventListener("scroll", () => {
    lazyload();
  });
});
</script>

<style scoped></style>
