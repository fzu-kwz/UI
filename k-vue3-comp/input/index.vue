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
      v-if="type !== 'textarea'"
      ref="_input"
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
      @focus="shadow = true"
      @blur="shadow = false"
    />
    <span class="k-input-suffix" v-if="type === 'text' || type === 'password'">
      <slot name="suffix">
        <span
          class="view"
          v-if="type === 'password' && allowView"
          @click="showPass"
        >
          <img
            src="../assets/icon/show.svg"
            alt="show"
            width="16"
            height="16"
            v-show="type === 'password' && passType === 'text'"
          />
          <img
            src="../assets/icon/hide.svg"
            alt="hide"
            width="16"
            height="16"
            v-show="type === 'password' && passType === 'password'"
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
  name: "Input",
};
</script>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: "",
  },
  type: {
    type: String,
    default: "text",
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
    type: Number,
    default: undefined,
  },
  min: {
    type: Number,
    default: undefined,
  },
  maxlength: {
    type: Number,
    default: undefined,
  },
  minlength: {
    type: Number,
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
    type: Number,
    default: undefined,
  },
  cols: {
    type: Number,
    default: undefined,
  },
});

const passType = ref();
const _input = ref<HTMLInputElement>();
onMounted(() => {
  _input.value?.type === "password" ? (passType.value = "password") : "";
});

// 是否聚焦
const shadow = ref(false);

// 子组件定义自己的modelValue
const modelValue = computed({
  get: () => props.modelValue,
  set: (value) => emits("update:modelValue", value),
});

// 更新v-model绑定的值
const emits = defineEmits(["update:modelValue"]);

// 清空modelValue
const clear = () => {
  emits("update:modelValue", "");
};

// 切换图标
const showPass = () => {
  if (_input.value)
    passType.value === "password"
      ? ((passType.value = "text"), (_input.value.type = "text"))
      : ((passType.value = "password"), (_input.value.type = "password"));
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
