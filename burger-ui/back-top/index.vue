<template>
  <span
    class="burger-back-top"
    v-show="visible"
    :style="{ right: processedRight, bottom: processedBottom }"
    @click="backTop"
  >
    <img
      src="../assets/icon/back-top.svg"
      alt="back-top"
      width="30"
      height="30"
      style="display: block"
    />
  </span>
</template>

<script lang="ts">
export default {
  name: 'BackTop',
};
</script>

<script setup lang="ts">
import { processedCssPx } from '$/utils';
import { computed, onMounted, onUnmounted, ref } from 'vue';

const props = defineProps({
  target: {
    type: [HTMLElement, Window],
    default: window,
  },
  height: {
    type: Number,
    default: 200,
  },
  right: {
    type: Number,
    default: 40,
  },
  bottom: {
    type: Number,
    default: 40,
  },
});

const visible = ref(false);
const scrollTop = ref<number>(0);

const processedBottom = computed(() => processedCssPx(props.bottom));

const processedRight = computed(() => processedCssPx(props.right));

const handleScroll = () => {
  if (props.target === window) {
    scrollTop.value = document.documentElement.scrollTop;
  } else {
    scrollTop.value = (props.target as HTMLElement).scrollTop;
  }
  visible.value = scrollTop.value >= Number(props.height) ? true : false;
};

onMounted(() => {
  props.target.addEventListener('scroll', handleScroll, true);
});

onUnmounted(() => {
  props.target.removeEventListener('scroll', handleScroll);
});

const backTop = () => {
  props.target.scrollTo({
    top: 0,
    behavior: 'smooth', // 平滑移动
  });
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
