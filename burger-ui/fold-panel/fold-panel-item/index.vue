<template>
  <div class="burger-fold-panel-item">
    <div
      class="burger-fold-panel-item-header"
      :class="visible ? 'no-bottom' : ''"
      @click="handleClick"
    >
      <slot name="title">
        <span>{{ title }}</span>
      </slot>
      <img
        class="arrow"
        :class="visible ? 'down' : ''"
        src="../../assets/icon/arrow-right.svg"
        alt="arrow-right"
        width="16"
      />
    </div>
    <div
      v-show="visible"
      ref="wrap"
      class="burger-fold-panel-item-wrap"
      :class="!visible ? 'no-bottom' : ''"
    >
      <div class="burger-fold-panel-item-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "FoldPanelItem",
};
</script>

<script setup lang="ts">
import {
  computed,
  inject,
  nextTick,
  onMounted,
  onUpdated,
  ref,
  useSlots,
  watch,
} from "vue";
import { FoldPanelProps } from "../types";
import { debug } from "console";

const props = defineProps({
  name: {
    type: [String, Number],
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(["change"]);

const wrap = ref<HTMLDivElement | null>();

const visible = ref(true);

const foldPanelProps = inject<FoldPanelProps>("foldPanelProps");

const activeFlag = computed(() => {
  return (
    (foldPanelProps?.accordion && foldPanelProps?.modelValue === props.name) ||
    (!foldPanelProps?.accordion &&
      foldPanelProps?.modelValue.includes(props.name.toString()))
  );
});

const toggleVisible = () => {
  visible.value = false;
  wrap.value?.removeEventListener("transitionend", toggleVisible);
  emits("change", visible.value);
};

const handleClick = () => {
  if (!visible.value) {
    visible.value = true;
    requestAnimationFrame(() => {
      if (wrap.value) {
        wrap.value.style.maxHeight = `${height.value}px`;
      }
    });
    emits("change", visible.value);
  } else {
    if (wrap.value) {
      wrap.value.style.maxHeight = `0`;
    }
    wrap.value?.addEventListener("transitionend", toggleVisible);
  }
};

const height = ref(0);

onMounted(() => {
  // @ts-ignore
  height.value = wrap.value?.getBoundingClientRect().height;
  if (!activeFlag.value) {
    visible.value = false;
    if (wrap.value) {
      wrap.value.style.maxHeight = `0`;
    }
  }
});
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
