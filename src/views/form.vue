<template>
  <Form align-top>
    <h3 style="margin-top: 0;">Form 表单</h3>
    <FormItem label-text="基础用法">
      <Form>
        <FormItem label-text="账号：">
          <Input></Input>
        </FormItem>
        <FormItem label-text="密码：">
          <Input></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" style="width: 100%;">确定</Button>
        </FormItem>
      </Form>
    </FormItem>
    <FormItem label-text="Form Attributes">
      <Table
        :columns="usageAttrColumns"
        :table-data="usageAttrTableData"
      ></Table>
    </FormItem>
    <FormItem label-text="FormItem Attributes">
      <Table
        :columns="usageItemAttrColumns"
        :table-data="usageItemAttrTableData"
      ></Table>
    </FormItem>
  </Form>
</template>

<script setup lang="ts">
import { Form, FormItem, Input, Button, Table } from "$/index";
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
    parameter: "border",
    note: "是否显示边框",
    type: "boolean",
    optional: "-",
    default: "false",
  },
  {
    parameter: "alignTop",
    note: "标签是否置顶",
    type: "boolean",
    optional: "-",
    default: "false",
  },
];
const usageItemAttrColumns: Array<Column> = [
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
const usageItemAttrTableData = [
  {
    parameter: "labelText",
    note: "标签文本",
    type: "string",
    optional: "-",
    default: "-",
  },
  {
    parameter: "labelWidth",
    note: "标签宽度(单位px)",
    type: "number",
    optional: "-",
    default: "60",
  },
];
</script>

<style scoped></style>
