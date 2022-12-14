<template>
  <KForm align-top>
    <h3 style="margin-top: 0;">Progress 进度条</h3>
    <FormItem label-text="基础用法">
      <Progress v-for="item in type" :type="item" :value="30"></Progress>
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
import { Progress, KForm, FormItem, KTable } from "$/index";
import { Column } from "$/table/types";

const type = ["primary", "success", "info", "warning", "danger"];

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
    parameter: "type",
    note: "进度条类型",
    type: "string",
    optional: "primary / success / info / warning / danger",
    default: "primary",
  },
  {
    parameter: "value",
    note: "进度值",
    type: "number",
    optional: "-",
    default: "0",
  },
  {
    parameter: "total",
    note: "进度总值",
    type: "number",
    optional: "-",
    default: "100",
  },
];
</script>

<style scoped></style>
