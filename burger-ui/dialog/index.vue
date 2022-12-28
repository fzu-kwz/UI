<template>
  <Teleport to="body">
    <div class="mask" v-if="visible" @click.self="closeByModal">
      <div
        class="k-dialog"
        :style="{
          width: width + 'px',
          marginTop: top + 'px',
        }"
      >
        <div class="k-dialog-header">
          <span v-if="title" class="title">{{ title }}</span>
          <span v-if="showClose" class="close" @click="close">
            <img src="../assets/icon/delete.svg" alt="delete" width="24" />
          </span>
        </div>
        <div class="k-dialog-body">
          <slot></slot>
        </div>
        <div class="k-dialog-footer"><slot name="footer"></slot></div>
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
    default: true,
  },
  modalClose: {
    type: Boolean,
    default: true,
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

const closeByModal = () => {
  props.modalClose ? close() : "";
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
