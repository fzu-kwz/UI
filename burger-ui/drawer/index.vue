<template>
  <Teleport to="body">
    <div class="mask" v-if="visible" @click.self="closeByModal">
      <div
        class="k-drawer"
        :class="position"
        :style="{
          width:
            position === 'left' || position === 'right' ? width : '',
          height:
            position === 'top' || position === 'bottom' ? width : '',
        }"
      >
        <div class="k-drawer-header" v-if="title || showClose">
          <span v-if="title" class="title">{{ title }}</span>
          <img
            v-if="showClose"
            class="close"
            @click="close"
            src="../assets/icon/delete.svg"
            alt="delete"
            width="24"
          />
        </div>
        <div class="k-drawer-body">
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
import { computed } from "vue";

const props = defineProps({
  visible: {
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
  width: {
    type: String,
    default: '300px',
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
