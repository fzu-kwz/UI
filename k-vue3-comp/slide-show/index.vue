<template>
  <span
    class="k-slide-show"
    :class="arrow ? 'arrow-' + arrow : ''"
    :style="{ width: width + 'px', height: height + 'px' }"
  >
    <span class="icon left" @click="leftClick">
      <img src="../assets/icon/left.svg" alt="left" />
    </span>
    <span class="icon right" @click="rightClick">
      <img src="../assets/icon/right.svg" alt="right" />
    </span>
    <img
      ref="img"
      v-for="item in imgs"
      :key="item.src"
      :src="item.src"
      :alt="item.alt"
      :width="width"
      :height="height"
    />
  </span>
</template>

<script lang="ts">
export default {
  name: "SlideShow",
};
</script>

<script setup lang="ts">
import { onMounted, PropType, ref, watch } from "vue";
import { SlideImg } from "./types";

const props = defineProps({
  width: {
    type: String,
    default: "400",
  },
  height: {
    type: String,
    default: "200",
  },
  imgs: {
    type: Array as PropType<Array<SlideImg>>,
    default: [],
  },
  delay: {
    type: Number,
    default: 3000,
  },
  arrow: {
    type: String,
    default: "always",
  },
});

const img = ref<Array<HTMLElement>>();
const current = ref(0);

onMounted(() => {
  img.value?.forEach((item, index) => {
    item.style.left = +props.width * index + "px";
  });
});

const timer = ref(
  setInterval(
    () => {
      if (current.value === props.imgs.length - 1) current.value = 0;
      else current.value++;
    },
    props.delay < 2000 ? 2000 : props.delay
  )
);

const leftClick = () => {
  clearInterval(timer.value);
  if (current.value === 0) current.value = props.imgs.length - 1;
  else current.value--;
  timer.value = setInterval(
    () => {
      if (current.value === props.imgs.length - 1) current.value = 0;
      else current.value++;
    },
    props.delay < 2000 ? 2000 : props.delay
  );
};

const rightClick = () => {
  clearInterval(timer.value);
  if (current.value === props.imgs.length - 1) current.value = 0;
  else current.value++;
  timer.value = setInterval(
    () => {
      if (current.value === props.imgs.length - 1) current.value = 0;
      else current.value++;
    },
    props.delay < 2000 ? 2000 : props.delay
  );
};

watch(current, (newVal, oldVal) => {
  img.value?.forEach((item, index) => {
    if (index === newVal) {
      item.style.left = "0";
    }
    if (index > newVal) {
      item.style.left = +props.width * (index - newVal) + "px";
    }
    if (index < newVal) {
      item.style.left = -+props.width * (newVal - index) + "px";
    }
  });
});
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
