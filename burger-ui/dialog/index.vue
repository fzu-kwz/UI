<template>
  <Teleport to="body">
    <div
      ref="maskRef"
      class="mask"
      v-show="visible"
      @click.self="closeByModal"
      tabindex="-1"
      @keyup.esc="closeByEsc"
    >
      <div
        class="burger-dialog"
        :style="{
          width: processedWidth,
          marginTop: processedTop,
        }"
      >
        <div class="burger-dialog-header">
          <slot name="header">
            <span v-if="title" class="title">{{ title }}</span>
            <span v-if="showClose" class="close" @click="close">
              <img src="../assets/icon/delete.svg" alt="delete" width="20" />
            </span>
          </slot>
        </div>
        <div class="burger-dialog-body">
          <slot></slot>
        </div>
        <div class="burger-dialog-footer">
          <slot name="footer">
            <Button style="margin-right: 10px" @click="handleCancel">
              取消
            </Button>
            <Button type="primary" @click="handleOk">确定</Button>
          </slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts">
export default {
  name: 'Dialog',
};
</script>

<script setup lang="ts">
import { processedCssPx } from '$/utils';
import { computed, nextTick, ref } from 'vue';
import { Button, Tip } from '$/index';

const props = defineProps({
  modelValue: {
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
  escClose: {
    type: Boolean,
    default: true,
  },
});

const emits = defineEmits([
  'update:modelValue',
  'close',
  'before-close',
  'ok',
  'cancel',
]);

// 弹窗遮罩层
const maskRef = ref<HTMLDivElement>();

const visible = computed({
  get: () => {
    if (props.modelValue) {
      nextTick(() => {
        maskRef.value?.focus();
      });
    }
    return props.modelValue;
  },
  set: (value) => {
    emits('update:modelValue', value);
  },
});

// 关闭弹窗
const close = () => {
  emits('before-close');
  visible.value = false;
  emits('close');
};

// 点击遮罩层关闭弹窗
const closeByModal = () => {
  props.modalClose ? close() : '';
};

// 按下esc关闭弹窗
const closeByEsc = () => {
  props.escClose ? close() : '';
};

// 取消按钮
const handleCancel = () => {
  emits('cancel');
  close();
};

// 确认按钮
const handleOk = () => {
  Tip('ok');
  emits('ok');
};

const processedWidth = computed(() => {
  return processedCssPx(props.width);
});

const processedTop = computed(() => {
  return processedCssPx(props.top);
});
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
