<template>
  <Teleport to="body">
    <div
      ref="maskRef"
      class="mask"
      v-show="visible"
      tabindex="-1"
      :class="[`${visibleEffect ? 'open' : 'close'}`]"
      :style="{ animationDuration: animationDuration }"
      @click.self="closeByModal"
      @keyup.esc="closeByEsc"
    >
      <div
        ref="drawerRef"
        class="burger-drawer"
        :class="[position, `${visibleEffect ? 'open' : 'close'}`]"
        :style="{
          width:
            position === 'left' || position === 'right' ? processedSize : '',
          height:
            position === 'top' || position === 'bottom' ? processedSize : '',
          animationDuration: animationDuration,
        }"
      >
        <div class="burger-drawer-header" v-if="title || showClose">
          <slot name="header">
            <span v-if="title" class="title">{{ title }}</span>
          </slot>
          <img
            v-if="showClose"
            class="close"
            src="../assets/icon/delete.svg"
            alt="delete"
            width="20"
            @click="handleClose"
          />
        </div>
        <div class="burger-drawer-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts">
export default {
  name: "drawer",
};
</script>

<script setup lang="ts">
import { processedCssPx } from "$/utils";
import { computed, nextTick, ref } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  position: {
    type: String,
    default: "right",
  },
  title: {
    type: String,
    default: undefined,
  },
  size: {
    type: [String, Number],
    default: "300px",
  },
  showClose: {
    type: Boolean,
    default: true,
  },
  modalClose: {
    type: Boolean,
    default: true,
  },
  escClose: {
    type: Boolean,
    default: true,
  },
  openDelay: {
    type: Number,
    default: 0,
  },
  closeDelay: {
    type: Number,
    default: 0,
  },
});

const emits = defineEmits([
  "update:modelValue",
  "open",
  "opened",
  "close",
  "closed",
  "ok",
  "cancel",
]);

const maskRef = ref<HTMLElement | null>();

const drawerRef = ref<HTMLElement | null>();

const visibleEffect = ref(false);

const visible = computed({
  get: () => {
    if (props.modelValue) {
      visibleEffect.value = true;
      emits("open");
      nextTick(() => {
        maskRef.value?.focus();
      });
      drawerRef.value?.addEventListener("animationend", handleOpened);
    }
    return props.modelValue;
  },
  set: (value) => {
    emits("update:modelValue", value);
  },
});

const handleOpened = () => {
  emits("opened");
  drawerRef.value?.removeEventListener("animationend", handleOpened);
};

// 动画时长
const animationDuration = computed(
  () => `${visibleEffect ? props.openDelay + 300 : props.closeDelay + 200}ms`
);

const position = computed(() => {
  if (
    props.position === "left" ||
    props.position === "right" ||
    props.position === "top" ||
    props.position === "bottom"
  ) {
    return props.position;
  } else {
    return "right";
  }
});

const processedSize = computed(() => {
  return processedCssPx(props.size);
});

// 关闭弹窗
const handleClose = () => {
  if (visibleEffect.value) {
    emits("close");
    drawerRef.value?.addEventListener("animationend", closed);
  }
  visibleEffect.value = false;
};

// 关闭动画结束时
const closed = () => {
  visible.value = false;
  emits("closed");
  drawerRef.value?.removeEventListener("animationend", closed);
};

// 点击遮罩层关闭弹窗
const closeByModal = () => {
  if (props.modalClose) {
    handleClose();
  }
};

// 按下esc关闭弹窗
const closeByEsc = () => {
  if (props.escClose) {
    handleClose();
  }
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
