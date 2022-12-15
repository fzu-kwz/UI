<template>
  <div
    class="k-slide-show"
    :class="arrow ? 'arrow-' + arrow : ''"
    :style="{ width: width + 'px', height: height + 'px' }"
  >
    <span class="icon left" @click="leftClick" v-show="false">
      <img src="../assets/icon/left.svg" alt="left" />
    </span>
    <span class="icon right" @click="rightClick">
      <img src="../assets/icon/right.svg" alt="right" />
    </span>
    <div
      v-for="item in slides"
      class="k-slide-show-img"
      :key="item.src"
      ref="slideImg"
      :style="{ width: width + 'px', height: height + 'px' }"
    >
      <a
        :href="item.link"
        target="_blank"
        :style="{ width: width + 'px', height: height + 'px' }"
      >
        <img :src="item.src" :alt="item.alt" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "SlideShow",
};
</script>

<script setup lang="ts">
import { onMounted, onUnmounted, PropType, ref, watch } from "vue";
import { Slide } from "./types";

const props = defineProps({
  width: {
    type: Number,
    default: "400",
  },
  height: {
    type: Number,
    default: "200",
  },
  slides: {
    type: Array as PropType<Array<Slide>>,
    default: [],
  },
  interval: {
    type: Number,
    default: 3000,
  },
  arrow: {
    type: String,
    default: "always",
  },
});

// 图片元素数组
const slideImg = ref<Array<HTMLElement>>();
// 中位数下标
const middle = Math.floor((props.slides.length - 1) / 2);
// 当前图片下标
const current = ref(middle);
// 预设间距
const spacing = ref<Array<string>>([]);
for (let i = 0; i < props.slides.length; i++) {
  spacing.value?.push(+props.width * (i - middle) + "px");
}
// 循环定时器
const timer = ref(
  setInterval(
    () => {
      if (current.value === props.slides.length - 1) current.value = 0;
      else current.value++;
    },
    props.interval < 0 ? 3000 : props.interval
  )
);

onMounted(() => {
  slideImg.value?.forEach((item, index) => {
    item.style.left = (spacing.value as Array<string>)[index];
  });
});

onUnmounted(() => {
  clearInterval(timer.value);
});

/* debug */
const leftClick = () => {
  clearInterval(timer.value);
  if (current.value === 0) current.value = props.slides.length - 1;
  else current.value--;
  timer.value = setInterval(
    () => {
      if (current.value === props.slides.length - 1) current.value = 0;
      else current.value++;
    },
    props.interval < 0 ? 3000 : props.interval
  );
};

const rightClick = () => {
  clearInterval(timer.value);
  if (current.value === props.slides.length - 1) current.value = 0;
  else current.value++;
  timer.value = setInterval(
    () => {
      if (current.value === props.slides.length - 1) current.value = 0;
      else current.value++;
    },
    props.interval < 0 ? 3000 : props.interval
  );
};

watch(current, (newVal, oldVal) => {
  slideImg.value?.forEach((item, index) => {
    if (index === newVal) {
      item.style.left = "0";
      item.style.transition = "left .3s ease 0s";
    } else {
      item.style.left =
        parseInt(item.style.left.replace("px", "")) - +props.width + "px";
      if (
        parseInt(item.style.left.replace("px", "")) <
        parseInt((spacing.value as Array<string>)[0].replace("px", ""))
      ) {
        item.style.left = (spacing.value as Array<string>)[
          props.slides.length - 1
        ];
        item.style.transition = "none";
      }
    }
  });
});
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
