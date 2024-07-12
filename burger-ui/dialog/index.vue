<template>
  <Teleport to="body">
    <div
      ref="maskRef"
      class="mask"
      :class="[`${visibleEffect ? 'open' : 'close'}`]"
      :style="{ animationDuration: animationDuration }"
      v-show="visible"
      tabindex="-1"
      @click.self="closeByModal"
      @keyup.esc="closeByEsc"
    >
      <div
        ref="dialogRef"
        class="burger-dialog"
        :class="[`${visibleEffect ? 'open' : 'close'}`]"
        :style="{
          width: processedWidth,
          marginTop: processedTop,
          animationDuration: animationDuration,
        }"
      >
        <div class="burger-dialog-header">
          <slot name="header">
            <span v-if="title" class="title">{{ title }}</span>
            <span v-if="showClose" class="close" @click="handleClose">
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
  name: "Dialog",
};
</script>

<script setup lang="ts">
import { Button } from "$/index";
import { processedCssPx } from "$/utils";
import { computed, nextTick, ref } from "vue";

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

// 弹窗遮罩层
const maskRef = ref<HTMLDivElement>();

// 弹窗
const dialogRef = ref<HTMLDivElement>();

const visibleEffect = ref(false);

const visible = computed({
  get: () => {
    if (props.modelValue) {
      visibleEffect.value = true;
      emits("open");
      nextTick(() => {
        maskRef.value?.focus();
      });
      dialogRef.value?.addEventListener("animationend", handleOpened);
    }
    return props.modelValue;
  },
  set: (value) => {
    emits("update:modelValue", value);
  },
});

// 动画时长
const animationDuration = computed(
  () => `${visibleEffect ? props.openDelay + 300 : props.closeDelay + 200}ms`
);

const handleOpened = () => {
  emits("opened");
  dialogRef.value?.removeEventListener("animationend", handleOpened);
};

// 关闭弹窗
const handleClose = () => {
  if (visibleEffect.value) {
    emits("close");
    dialogRef.value?.addEventListener("animationend", closed);
  }
  visibleEffect.value = false;
};

// 关闭动画结束时
const closed = () => {
  visible.value = false;
  emits("closed");
  dialogRef.value?.removeEventListener("animationend", closed);
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

// 取消按钮
const handleCancel = () => {
  if (visibleEffect.value) {
    emits("cancel");
    handleClose();
  }
  visibleEffect.value = false;
};

// 确认按钮
const handleOk = () => {
  emits("ok");
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
