<template>
  <div
    class="k-select"
    :class="[size ? 'k-select-' + size : '']"
    tabindex="-1"
    @click.self="display = !display"
    @blur="display = false"
    ref="select"
  >
    <span class="value" @click="display = !display">{{ currentName }}</span>
    <img
      class="down"
      src="../assets/icon/down.svg"
      alt="down"
      width="16"
      height="16"
      v-show="!close"
      @click="display = !display"
    />
    <img
      class="delete"
      src="../assets/icon/delete.svg"
      alt="delete"
      width="16"
      height="16"
      v-if="allowClear"
      v-show="close"
      @click="clear"
    />
    <ul
      class="k-select-option"
      :class="[
        size ? 'k-select-option-' + size : '',
        display ? 'k-select-option-display' : '',
      ]"
    >
      <li
        v-for="item in options"
        :key="item.value"
        @click="valueChange(item)"
        :class="currentVal === item.value ? 'active' : ''"
        :title="item.name"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: "KSelect",
};
</script>

<script setup lang="ts">
import { ref, watch } from "vue";

import { SelectOption } from "./types";

const props = defineProps({
  modelValue: {
    type: String,
    default: undefined,
  },
  size: {
    type: String,
    default: undefined,
  },
  options: {
    type: Array<SelectOption>,
    default: () => {
      return [];
    },
  },
  allowClear: {
    type: Boolean,
    default: undefined,
  },
});

// 显示选项
const display = ref(false);

// 显示清空按钮
const close = ref(false);

// 选中值
const currentVal = ref("");
const currentName = ref("");

// 更新v-model绑定的值
const emits = defineEmits(["update:model-value"]);
const valueChange = (item: SelectOption) => {
  emits("update:model-value", item.value);
  currentName.value = item.name;
  display.value = false;
};

// 监听绑定值变化
watch(props, () => {
  currentVal.value = props.modelValue as string;
  if (props.modelValue && props.allowClear) {
    close.value = true;
  } else {
    close.value = false;
  }
  if (props.modelValue === "") currentName.value = "";
});

// 清空值
const clear = () => {
  emits("update:model-value", "");
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
