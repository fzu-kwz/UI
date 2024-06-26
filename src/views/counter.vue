<template>
  <Form align-top>
    <h3 style="margin-top: 0;">Counter 计数器</h3>
    <FormItem label="基础用法">
      <Counter v-model="counter" :min="0" :max="10"></Counter>
    </FormItem>
    <FormItem label="禁用状态">
      <Counter v-model="counter" :min="0" :max="10" disabled></Counter>
    </FormItem>
    <FormItem label="不同大小">
      <Counter
        v-model="counter"
        :min="0"
        :max="10"
        v-for="item in size"
        :size="item"
        style="display: block; margin-bottom: 5px;"
      ></Counter>
    </FormItem>
    <FormItem label="Attributes">
      <Table
        :columns="usageAttrColumns"
        :table-data="usageAttrTableData"
      ></Table>
    </FormItem>
    <FormItem label="Events">
      <Table
        :columns="usageEventColumns"
        :table-data="usageEventTableData"
      ></Table>
    </FormItem>
  </Form>
</template>

<script setup lang="ts">
import { Counter, Form, FormItem, Table } from "$/index";
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
const usageEventColumns: Array<Column> = [
  {
    prop: "name",
    label: "名称",
  },
  {
    prop: "note",
    label: "备注",
  },
  {
    prop: "callback",
    label: "回调参数",
  },
];
const usageEventTableData = [
  {
    name: "change",
    note: "绑定值改变时触发",
    callback: "绑定值",
  },
];
</script>

<style scoped></style>
