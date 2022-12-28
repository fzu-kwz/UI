<template>
  <KForm align-top>
    <h3 style="margin-top: 0;">Pagination 分页</h3>
    <FormItem label-text="基础用法">
      <Pagination v-model:current="current" jumper></Pagination>
    </FormItem>
    <FormItem label-text="带背景色">
      <Pagination v-model:current="current" jumper background></Pagination>
    </FormItem>
    <FormItem label-text="Attributes">
      <KTable
        :columns="usageAttrColumns"
        :table-data="usageAttrTableData"
      ></KTable>
    </FormItem>
    <FormItem label-text="Events">
      <KTable
        :columns="usageEventColumns"
        :table-data="usageEventTableData"
      ></KTable>
    </FormItem>
  </KForm>
</template>

<script setup lang="ts">
import { Pagination, KForm, FormItem, KTable } from "$/index";
import { Column } from "$/table/types";
import { ref } from "vue";

const current = ref(1);

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
    parameter: "v-model:current",
    note: "当前页码(需要绑定)",
    type: "number",
    optional: "-",
    default: "1",
  },
  {
    parameter: "total",
    note: "页码总数(0/1时不显示)",
    type: "number",
    optional: "-",
    default: "10",
  },
  {
    parameter: "jumper",
    note: "是否显示跳转输入框",
    type: "string",
    optional: "-",
    default: "false",
  },
  {
    parameter: "background",
    note: "是否显示背景色",
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
    name: "currentChange",
    note: "页码改变时触发",
    callback: "当前页码",
  },
  {
    name: "prevClick",
    note: "点击上一页按钮时触发",
    callback: "当前页码",
  },
  {
    name: "nextClick",
    note: "点击下一页按钮时触发",
    callback: "当前页码",
  },
];
</script>

<style scoped></style>
