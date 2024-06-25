<template>
  <Form align-top>
    <h3 style="margin-top: 0;">Empty 空状态</h3>
    <FormItem label-text="基础用法">
      <Empty></Empty>
    </FormItem>
    <FormItem label-text="自定义图片">
      <Empty
        src="https://img0.baidu.com/it/u=3263383870,1485448309&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200"
      ></Empty>
    </FormItem>
    <FormItem label-text="Attributes">
      <Table
        :columns="usageAttrColumns"
        :table-data="usageAttrTableData"
      ></Table>
    </FormItem>
  </Form>
</template>

<script setup lang="ts">
import { Empty, Form, FormItem, Table } from "$/index";
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
    parameter: "src",
    note: "图像的访问地址",
    type: "string",
    optional: "-",
    default: "-",
  },
  {
    parameter: "text",
    note: "描述文字",
    type: "string",
    optional: "-",
    default: "No Data",
  },
];
</script>

<style scoped></style>
