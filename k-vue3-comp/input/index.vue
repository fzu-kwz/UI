<template>
  <div
    class="k-input"
    :class="[
      shadow ? 'shadow' : '',
      size ? 'k-input-' + size : '',
      disabled ? 'k-input-disabled' : '',
    ]"
    :style="{ height: type === 'textarea' ? 'auto' : '' }"
  >
    <input
      v-if="type === 'text' || type === 'password'"
      :type="type"
      class="k-input-inner"
      :class="[disabled ? 'k-input-disabled' : '']"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :autofocus="autofocus"
      :max="max"
      :min="min"
      :maxlength="maxlength"
      :minlength="minlength"
      :readonly="readonly"
      :disabled="disabled"
      v-model="modelValue"
      @focus="(shadow = true), emits('focus')"
      @blur="(shadow = false), emits('blur')"
    />
    <span class="k-input-suffix" v-if="type === 'text' || type === 'password'">
      <slot name="k-input-suffix">
        <span
          class="view"
          v-if="props.type === 'password' && allowView"
          @click="showPass"
        >
          <img
            src="../assets/icon/show.svg"
            alt="show"
            width="16"
            height="16"
            v-show="type === 'text'"
          />
          <img
            src="../assets/icon/hide.svg"
            alt="hide"
            width="16"
            height="16"
            v-show="type === 'password'"
          />
        </span>
        <span class="clear" v-if="allowClear" @click="clear">
          <img
            src="../assets/icon/delete.svg"
            alt="delete"
            width="16"
            height="16"
          />
        </span>
      </slot>
    </span>

    <textarea
      v-if="type === 'textarea'"
      class="k-textarea"
      :class="[disabled ? 'k-textarea-disabled' : '']"
      :style="{ resize: resize ? 'vertical' : 'none' }"
      :placeholder="placeholder"
      :autofocus="autofocus"
      :maxlength="maxlength"
      :readonly="readonly"
      :disabled="disabled"
      :rows="rows"
      :cols="cols"
      v-model="modelValue"
      @focus="shadow = true"
      @blur="shadow = false"
    ></textarea>
  </div>
</template>

<script lang="ts">
export default {
  name: "KInput",
};
</script>

<script setup lang="ts">
import { computed, ref } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
    validator: (value: string) => {
      return ["text", "password", "textarea"].indexOf(value) !== -1;
    },
  },
  size: {
    type: String,
    default: undefined,
  },
  allowClear: {
    type: Boolean,
    default: undefined,
  },
  allowView: {
    type: Boolean,
    default: undefined,
  },
  placeholder: {
    type: String,
    default: undefined,
  },
  autocomplete: {
    type: String,
    default: undefined,
  },
  autofocus: {
    type: Boolean,
    default: undefined,
  },
  max: {
    type: [Number, String],
    default: undefined,
  },
  min: {
    type: [Number, String],
    default: undefined,
  },
  maxlength: {
    type: [Number, String],
    default: undefined,
  },
  minlength: {
    type: [Number, String],
    default: undefined,
  },
  readonly: {
    type: Boolean,
    default: undefined,
  },
  disabled: {
    type: Boolean,
    default: undefined,
  },
  resize: {
    type: Boolean,
    default: undefined,
  },
  rows: {
    type: [Number, String],
    default: undefined,
  },
  cols: {
    type: [Number, String],
    default: undefined,
  },
});

// 密码框类型
const type = ref(props.type);

// 是否聚焦
const shadow = ref(false);

// 子组件定义自己的modelValue
const modelValue = computed({
  get: () => props.modelValue,
  set: (value) => emits("update:modelValue", value),
});

// 更新v-model绑定的值
const emits = defineEmits(["update:modelValue", "focus", "blur"]);

// 清空modelValue
const clear = () => {
  emits("update:modelValue", "");
};

// 切换图标
const showPass = () => {
  type.value === "password" ? (type.value = "text") : (type.value = "password");
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
