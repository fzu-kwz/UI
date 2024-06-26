<template>
  <div class="burger-select">
    <Input
      :size="size"
      class="one-icon"
      v-model="currentLabel"
      readonly
      :disabled="disabled"
      @click="disabled ? '' : (display = !display)"
      @blur="display = false"
    >
      <template #suffix>
        <img
          class="down"
          :class="[display ? 'up' : '', disabled ? 'disabled' : '']"
          src="../assets/icon/arrow-bottom.svg"
          alt="arrow-bottom"
          width="18"
          v-show="!close"
        />
        <img
          class="delete"
          :class="disabled ? 'disabled' : ''"
          src="../assets/icon/delete.svg"
          alt="delete"
          width="18"
          v-if="allowClear"
          v-show="close"
          @click.stop="clear"
        />
      </template>
    </Input>
    <ul
      ref="option"
      class="burger-select-option"
      :class="[size ? 'burger-select-option-' + size : '']"
    >
      <li
        v-for="item in options"
        :key="item.value"
        @click="valueChange(item)"
        :class="currentValue === item.value ? 'active' : ''"
      >
        {{ item.label ? item.label : item.value }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: "Select",
};
</script>

<script setup lang="ts">
import { onMounted, PropType, ref, watch } from "vue";
import { Input } from "../index";
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
const currentValue = ref("");

// 显示的值
const currentLabel = ref("");

// 更新v-model绑定的值
const emits = defineEmits(["update:modelValue"]);
const valueChange = (item: SelectOption) => {
  emits("update:modelValue", item.value);
  currentLabel.value = item.label ? item.label : item.value;
  display.value = false;
};

// 监听绑定值变化
watch(props, () => {
  currentValue.value = props.modelValue as string;
  if (props.modelValue && props.allowClear) {
    close.value = true;
  } else {
    close.value = false;
  }
  if (props.modelValue === "") currentLabel.value = "";
});

// 清空值
const clear = () => {
  if (props.disabled) return;
  emits("update:modelValue", "");
};

const option = ref<HTMLElement>();
const optionHeight = ref();
onMounted(() => {
  optionHeight.value = option.value?.offsetHeight + "px";
  (option.value as HTMLElement).style.height = "0";
});

watch(display, () => {
  const optionNode = option.value as HTMLElement;
  if (display.value) {
    optionNode.style.height = optionHeight.value;
    optionNode.style.opacity = "1";
    optionNode.style.boxShadow = "0 1px 5px 1px #ccc";
    optionNode.style.padding = "5px 0";
    optionNode.style.margin = "5px 0";
  } else {
    optionNode.style.height = "0";
    optionNode.style.opacity = "0";
    optionNode.style.boxShadow = "0 1px 5px 1px #fff";
    optionNode.style.padding = "0";
    optionNode.style.marginTop = "0";
  }
});
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
