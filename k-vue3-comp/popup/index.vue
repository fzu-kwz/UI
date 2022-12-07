<template>
  <span class="popup" ref="popup">
    <slot name="trigger"></slot>
    <span
      class="popup-card"
      :class="[fade ? 'fade-out' : '', position]"
      ref="card"
      :style="{ width: width + 'px' }"
      v-show="show"
    >
      <span class="popup-card-content">
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

const show = ref(false);
const fade = ref(false);

const popup = ref<HTMLElement>();
const card = ref<HTMLElement>();

const enterListener = () => {
  show.value = true;
  const popupNode = popup.value as HTMLElement;
  const cardNode = card.value as HTMLElement;
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
          popupNode.getBoundingClientRect().width <=
        +props.width
      ) {
        cardNode.style.left =
          -(
            popupNode.getBoundingClientRect().right -
            popupNode.getBoundingClientRect().width -
            5
          ) + "px";
        cardNode.style.top = "100%";
        cardNode.style.paddingTop = "10px";
      } else {
        cardNode.style.left = -props.width + "px";
        cardNode.style.removeProperty("top");
        cardNode.style.removeProperty("padding-top");
      }
      break;
    default:
      // 右边空间不足
      if (
        popupNode.getBoundingClientRect().right + +props.width >=
        document.documentElement.clientWidth
      ) {
        cardNode.style.right =
          -(
            document.documentElement.clientWidth -
            popupNode.getBoundingClientRect().right -
            5
          ) + "px";
        cardNode.style.top = "100%";
        cardNode.style.paddingTop = "10px";
      } else {
        cardNode.style.removeProperty("right");
        cardNode.style.removeProperty("top");
        cardNode.style.removeProperty("padding-top");
      }
  }
};

const leaveListener = () => {
  fade.value = true;
  setTimeout(() => {
    show.value = false;
    fade.value = false;
  }, 100);
};

onMounted(() => {
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
