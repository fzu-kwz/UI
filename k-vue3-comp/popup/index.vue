<template>
  <span class="k-popup" ref="popup">
    <slot name="trigger"></slot>
    <span
      class="k-popup-card"
      :class="[hover ? position : '']"
      ref="card"
      :style="{ width: width + 'px' }"
    >
      <span class="k-popup-card-content" :class="hover ? 'shadow' : ''">
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
    default: "right",
  },
  width: {
    type: String,
    default: "200",
  },
  content: {
    type: String,
    default: "",
  },
});

const hover = ref(false);
//
const cardHeight = ref();
const popupHeight = ref();

const popup = ref<HTMLElement>();
const card = ref<HTMLElement>();

const enterListener = () => {
  hover.value = true;
  const popupNode = popup.value as HTMLElement;
  const cardNode = card.value as HTMLElement;
  cardNode.style.opacity = "1";
  cardNode.style.height = cardHeight.value + "px";
  switch (props.position) {
    case "bottom":
      cardNode.style.top = "100%";
      if (
        popupNode.getBoundingClientRect().right -
          popupNode.getBoundingClientRect().width / 2 <
        +props.width / 2
      ) {
        cardNode.style.marginLeft = "5px";
        cardNode.style.left = -popupNode.getBoundingClientRect().x + "px";
      } else {
        cardNode.style.left =
          -props.width / 2 + popupNode.getBoundingClientRect().width / 2 + "px";
      }
      break;
    case "left":
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
        cardNode.style.top =
          "-" + (cardHeight.value - popupHeight.value) / 2 + "px";
      } else {
        cardNode.style.removeProperty("padding-left");
        cardNode.style.left = -props.width - 12 + "px";
        cardNode.style.paddingRight = "10px";
        cardNode.style.top =
          "-" + (cardHeight.value - popupHeight.value) / 2 + "px";
      }
      break;
    default:
      // 右边空间不足
      if (
        popupNode.getBoundingClientRect().right + +props.width + 13 >=
        document.documentElement.clientWidth
      ) {
        cardNode.style.left = -props.width - 20 + "px";
        cardNode.style.paddingRight = "10px";
        cardNode.style.top =
          "-" + (cardHeight.value - popupHeight.value) / 2 + "px";
      } else {
        cardNode.style.removeProperty("left");
        cardNode.style.removeProperty("padding-right");
        cardNode.style.top =
          "-" + (cardHeight.value - popupHeight.value) / 2 + "px";
      }
  }
};

const leaveListener = () => {
  (card.value as HTMLElement).style.height = "0";
  (card.value as HTMLElement).style.opacity = "0";
  (card.value as HTMLElement).style.removeProperty("padding-top");
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
