<template>
  <KForm align-top>
    <h3 style="margin-top: 0;">Checkbox 多选框</h3>
    <p class="usage">
      v-model: 绑定值（boolean）<br />
      @change: 绑定值变化时触发的事件（回调参数绑定值）
    </p>
    <FormItem label-text="基础用法">
      <Chechbox v-model="checked">多选框</Chechbox>
    </FormItem>
    <FormItem label-text="禁用状态">
      <Chechbox v-model="checked" disabled>禁用状态</Chechbox>
    </FormItem>
    <FormItem label-text="多选框组">
      <Chechbox
        v-for="item in checkboxs"
        :key="item.label"
        v-model="item.checked"
        style="margin-right: 10px;"
      >
        {{ item.label }}
      </Chechbox>
    </FormItem>
  </KForm>
</template>

<script setup lang="ts">
import { Chechbox, KForm, FormItem } from "$/index";
import { reactive, ref } from "vue";

const checked = ref(true);
const checkboxs = reactive([
  {
    label: "多选框A",
    checked: false,
  },
  {
    label: "多选框B",
    checked: false,
  },
  {
    label: "多选框C",
    checked: false,
  },
]);
</script>

<style scoped></style>
