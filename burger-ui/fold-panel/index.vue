<template>
  <div class="k-fold-panel">
    <div
      class="k-fold-panel-header"
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
        src="../assets/icon/arrow-right.svg"
        alt="arrow-right"
        width="16"
      />
    </div>
    <div
      v-show="visible"
      ref="wrap"
      class="k-fold-panel-wrap"
      :class="visible ? 'show' : ''"
    >
      <div class="k-fold-panel-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "FoldPanel",
};
</script>

<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: undefined,
  },
  active: {
    type: Boolean,
    default: undefined,
  },
});

const visible = ref(false);

watch(props, () => {
  visible.value = props.active ? true : false;
});
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
