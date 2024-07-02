<template>
  <img
    ref="img"
    :data-src="src"
    :src="lazy ? loadingSrc : src"
    alt="img"
    :width="width"
    :height="height"
    :style="{ objectFit: objectFit }"
  />
</template>

<!-- Bug：在一个比视口高度小的滚动元素中，其中在视口内的懒加载图片会加载 -->
<script lang="ts">
export default {
  name: "Image",
};
</script>

<script setup lang="ts">
import { onMounted, onUnmounted, PropType, ref } from "vue";

const props = defineProps({
  loadingSrc: {
    type: String,
    default: "",
  },
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
  lazy: {
    type: Boolean,
    default: false,
  },
  objectFit: {
    type: String as PropType<
      "fill" | "contain" | "cover" | "none" | "scale-down"
    >,
    default: "cover",
  },
});

const img = ref();

// 视口高度
const viewHeight = ref(
  props.target === window
    ? window.innerHeight
    : (props.target as HTMLElement).offsetTop +
        parseInt(
          window
            .getComputedStyle(props.target as HTMLElement)
            .getPropertyValue("height")
        )
);

const lazyload = () => {
  // 图片距离顶部高度小于视高，即图片进入可视范围
  if (img.value?.getBoundingClientRect().top < viewHeight.value) {
    setTimeout(() => {
      img.value.setAttribute(
        "src",
        img.value.getAttribute("data-src") as string
      );
    }, 500);
    props.target.removeEventListener("scroll", lazyload);
  }
};

onMounted(() => {
  if (props.lazy) {
    lazyload();
    props.target.addEventListener("scroll", lazyload);
  }
});

onUnmounted(() => {
  if (props.lazy) {
    props.target.removeEventListener("scroll", lazyload);
  }
});
</script>

<style scoped></style>
