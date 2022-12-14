<template>
  <span class="k-popup" ref="popup">
    <slot name="refer"></slot>
    <span
      class="k-popup-card"
      :class="[hover ? position : '']"
      ref="card"
      :style="{ width: width + 'px' }"
    >
      <span
        class="k-popup-card-content"
        :class="[hover ? 'shadow' : '', theme]"
      >
        <slot>{{ content }}</slot>
      </span>
    </span>
  </span>
</template>

<script lang="ts">
export default {
  name: "Popup",
};
</script>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const props = defineProps({
  position: {
    type: String,
    default: "top",
  },
  width: {
    type: String,
    default: "150",
  },
  content: {
    type: String,
    default: "",
  },
  theme: {
    type: String,
    default: "light",
  },
});
// 是否移入触发Popup的元素
const hover = ref(false);
// 弹窗高度
const cardHeight = ref();
// 触发Popup的元素的高度
const popupHeight = ref();
// 触发Popup的元素
const popup = ref<HTMLElement>();
// 弹窗
const card = ref<HTMLElement>();

const enterListener = () => {
  hover.value = true;
  const popupNode = popup.value as HTMLElement;
  const cardNode = card.value as HTMLElement;
  cardNode.style.opacity = "1";
  cardNode.style.height = cardHeight.value + "px";
  switch (props.position) {
    case "top":
      cardNode.style.top = -cardHeight.value - 10 + "px";
      if (popupNode.getBoundingClientRect().width < +props.width) {
        cardNode.style.left =
          -(+props.width - popupNode.getBoundingClientRect().width) / 2 -
          3 +
          "px";
      } else {
        cardNode.style.left =
          (popupNode.getBoundingClientRect().width - +props.width) / 2 -
          3 +
          "px";
      }
      break;
    case "bottom":
      cardNode.style.top = "100%";
      if (popupNode.getBoundingClientRect().width < +props.width) {
        cardNode.style.left =
          -(+props.width - popupNode.getBoundingClientRect().width) / 2 -
          3 +
          "px";
      } else {
        cardNode.style.left =
          (popupNode.getBoundingClientRect().width - +props.width) / 2 -
          3 +
          "px";
      }
      break;
    case "left":
      cardNode.style.top =
        "-" + ((cardHeight.value - popupHeight.value) / 2 + 3) + "px";
      // 左边空间不足
      if (
        popupNode.getBoundingClientRect().right -
          popupNode.getBoundingClientRect().width -
          10 <=
        +props.width
      ) {
        cardNode.style.removeProperty("padding-right");
        cardNode.style.removeProperty("left");
        cardNode.style.paddingLeft = "10px";
      } else {
        cardNode.style.removeProperty("padding-left");
        cardNode.style.left = -(+props.width + 15) + "px";
        cardNode.style.paddingRight = "10px";
      }
      break;
    default:
      cardNode.style.top =
        "-" + ((cardHeight.value - popupHeight.value) / 2 + 3) + "px";
      // 右边空间不足
      if (
        popupNode.getBoundingClientRect().right + +props.width + 13 >=
        document.documentElement.clientWidth
      ) {
        cardNode.style.left = -props.width - 20 + "px";
        cardNode.style.paddingRight = "10px";
      } else {
        cardNode.style.removeProperty("left");
        cardNode.style.removeProperty("padding-right");
      }
      break;
  }
};

const leaveListener = () => {
  (card.value as HTMLElement).style.height = "0";
  (card.value as HTMLElement).style.opacity = "0";
  hover.value = false;
};

onMounted(() => {
  cardHeight.value = card.value?.offsetHeight;
  popupHeight.value = popup.value?.offsetHeight;
  (card.value as HTMLElement).style.height = "0";
  (card.value as HTMLElement).style.opacity = "0";
  popup.value?.addEventListener("mouseenter", enterListener);
  popup.value?.addEventListener("mouseleave", leaveListener);
});

onUnmounted(() => {
  popup.value?.removeEventListener("mouseenter", enterListener);
  popup.value?.removeEventListener("mouseleave", leaveListener);
});
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
