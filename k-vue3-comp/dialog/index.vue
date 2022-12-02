<template>
  <Teleport to="body">
    <div class="mask" v-show="visible" @click.self="close">
      <div
        class="modal"
        :style="{
          width: width + 'px',
          marginTop: top + 'px',
        }"
      >
        <div class="modal-header">
          <img
            v-if="showClose"
            class="close"
            src="../assets/icon/delete.svg"
            alt="delete"
            width="20"
            height="20"
            @click="close"
          />
          <span v-if="title" class="title">{{ title }}</span>
        </div>
        <slot></slot>
        <div class="modal-footer"><slot name="footer"></slot></div>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts">
export default {
  name: "Dialog",
};
</script>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: undefined,
  },
  width: {
    type: Number,
    default: 500,
  },
  top: {
    type: Number,
    default: 80,
  },
  showClose: {
    type: Boolean,
    default: undefined,
  },
});

const emits = defineEmits(["update:visible", "close"]);

// v-model:visible同步更新，不需要@update:visible
const visible = computed({
  get: () => props.visible,
  set: (value) => {
    emits("update:visible", value);
  },
});

const close = () => {
  visible.value = false;
  emits("close");
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
