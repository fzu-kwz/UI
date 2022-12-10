<template>
  <div class="k-fold-panel-item">
    <div
      class="k-fold-panel-item-header"
      :class="visible ? 'no-bottom' : ''"
      @click="visible = !visible"
    >
      <slot name="title">
        <span>
          {{ title }}
        </span>
      </slot>
      <img
        class="arrow"
        :class="visible ? 'down' : ''"
        src="../../assets/icon/right.svg"
        alt="right"
        width="16"
      />
    </div>
    <div ref="wrap" class="k-fold-panel-item-wrap">
      <div class="k-fold-panel-item-content">
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
import { onMounted, ref, watch } from "vue";

defineProps({
  title: {
    type: String,
    default: undefined,
  },
});

const visible = ref(false);

const wrap = ref<HTMLElement>();
const wrapHeight = ref();

onMounted(() => {
  wrapHeight.value = wrap.value?.clientHeight + "px";
  (wrap.value as HTMLElement).style.height = "0";
});

watch(visible, () => {
  (wrap.value as HTMLElement).style.height = visible.value
    ? wrapHeight.value
    : "0";
  (wrap.value as HTMLElement).style.borderBottom = visible.value
    ? "1px solid #ebeef5"
    : "";
});
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
