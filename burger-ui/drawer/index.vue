<template>
  <Teleport to="body">
    <div class="mask" v-if="visible" @click.self="closeByModal">
      <div
        class="burger-drawer"
        :class="position"
        :style="{
          width:
            position === 'left' || position === 'right' ? processedSize : '',
          height:
            position === 'top' || position === 'bottom' ? processedSize : '',
        }"
      >
        <div class="burger-drawer-header" v-if="title || showClose">
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
        <div class="burger-drawer-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts">
export default {
  name: 'drawer',
};
</script>

<script setup lang="ts">
import { processedCssPx } from '$/utils';
import { computed } from 'vue';

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  position: {
    type: String,
    default: 'right',
  },
  title: {
    type: String,
    default: undefined,
  },
  size: {
    type: [String, Number],
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

const emits = defineEmits(['update:visible', 'before-close', 'close']);

// v-model:visible同步更新，不需要@update:visible
const visible = computed({
  get: () => props.visible,
  set: (value) => {
    emits('update:visible', value);
  },
});

const position = computed(() => {
  if (
    props.position === 'left' ||
    props.position === 'right' ||
    props.position === 'top' ||
    props.position === 'bottom'
  ) {
    return props.position;
  } else {
    return 'right';
  }
});

const processedSize = computed(() => {
  return processedCssPx(props.size);
});

const close = () => {
  emits('before-close');
  visible.value = false;
  emits('close');
};

const closeByModal = () => {
  props.modalClose ? close() : '';
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
