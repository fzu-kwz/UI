<template>
  <KForm align-top>
    <h3 style="margin-top: 0;">Counter 计数器</h3>
    <FormItem label-text="基础用法">
      <Counter v-model="counter" :min="0" :max="10"></Counter>
    </FormItem>
    <FormItem label-text="禁用状态">
      <Counter v-model="counter" :min="0" :max="10" disabled></Counter>
    </FormItem>
    <FormItem label-text="不同大小">
      <Counter
        v-model="counter"
        :min="0"
        :max="10"
        v-for="item in size"
        :size="item"
        style="display: block; margin-bottom: 5px;"
      ></Counter>
    </FormItem>
    <FormItem label-text="Attributes">
      <KTable
        :columns="usageAttrColumns"
        :table-data="usageAttrTableData"
      ></KTable>
    </FormItem>
  </KForm>
</template>

<script setup lang="ts">
import { Counter, KForm, FormItem, KTable } from "$/index";
import { Column } from "$/table/types";
import { ref } from "vue";

const counter = ref(0);
const size = ["large", "medium", "", "small"];

const usageAttrColumns: Array<Column> = [
  {
    prop: "parameter",
    label: "参数",
  },
  {
    prop: "note",
    label: "备注",
  },
  {
    prop: "type",
    label: "类型",
  },
  {
    prop: "optional",
    label: "可选值",
  },
  {
    prop: "default",
    label: "默认值",
  },
];
const usageAttrTableData = [
  {
    parameter: "v-model",
    note: "绑定值(需要绑定)",
    type: "number",
    optional: "-",
    default: "0",
  },
  {
    parameter: "max",
    note: "最大值",
    type: "number",
    optional: "-",
    default: "Infinity",
  },
  {
    parameter: "min",
    note: "最小值",
    type: "number",
    optional: "-",
    default: "-Infinity",
  },
  {
    parameter: "step",
    note: "数字间隔",
    type: "number",
    optional: "-",
    default: "1",
  },
  {
    parameter: "size",
    note: "计数器大小",
    type: "string",
    optional: "large / medium / small",
    default: "-",
  },
  {
    parameter: "disabled",
    note: "是否禁用",
    type: "boolean",
    optional: "-",
    default: "false",
  },
];
</script>

<style scoped></style>
