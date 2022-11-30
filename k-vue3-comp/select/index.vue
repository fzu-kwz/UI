<template>
  <div class="k-select">
    <KInput
      :size="size"
      v-model="currentName"
      readonly
      :disabled="disabled"
      @click="disabled ? '' : (display = !display)"
    >
      <template #k-input-suffix>
        <img
          class="down"
          :class="[display ? 'up' : '', disabled ? 'disabled' : '']"
          src="../assets/icon/down.svg"
          alt="down"
          width="16"
          height="16"
          v-show="!close"
        />
        <img
          class="delete"
          src="../assets/icon/delete.svg"
          alt="delete"
          width="16"
          height="16"
          v-if="allowClear"
          v-show="close"
          @click.stop="clear"
        />
      </template>
    </KInput>
    <ul
      class="k-select-option"
      :class="[size ? 'k-select-option-' + size : '']"
      v-show="display"
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
import { PropType, ref, watch } from "vue";
import { KInput } from "../index";
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
    type: Array as PropType<SelectOption[]>,
    default: () => {
      return [];
    },
  },
  allowClear: {
    type: Boolean,
    default: undefined,
  },
  disabled: {
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
