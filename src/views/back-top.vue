<template>
  <Form align-top>
    <h3 style="margin-top: 0;">BackTop 回到顶部</h3>
    <FormItem label="Attributes">
      <Table
        :columns="usageAttrColumns"
        :table-data="usageAttrTableData"
      ></Table>
    </FormItem>
  </Form>
</template>

<script setup lang="ts">
import { Form, FormItem, Table } from "$/index";
import { Column } from "$/table/types";

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
    parameter: "target",
    note: "触发滚动的对象",
    type: "HTMLElement / Window",
    optional: "-",
    default: "window",
  },
  {
    parameter: "height",
    note: "达到此滚动高度时显示(单位px)",
    type: "number",
    optional: "-",
    default: "200",
  },
  {
    parameter: "right",
    note: "与视口右边的距离(单位px)",
    type: "number",
    optional: "-",
    default: "40",
  },
  {
    parameter: "bottom",
    note: "与视口底部的距离(单位px)",
    type: "number",
    optional: "-",
    default: "40",
  },
];
</script>

<style scoped></style>
