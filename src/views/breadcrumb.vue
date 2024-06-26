<template>
  <Form align-top>
    <h3 style="margin-top: 0;">Breadcrumb 面包屑</h3>
    <FormItem label="基础用法">
      <Breadcrumb :list="list"></Breadcrumb>
    </FormItem>
    <FormItem label="自定义分隔符">
      <Breadcrumb :list="list" separator=">"></Breadcrumb>
    </FormItem>
    <FormItem label="Attributes">
      <Table
        :columns="usageAttrColumns"
        :table-data="usageAttrTableData"
      ></Table>
    </FormItem>
    <FormItem label="BreadcrumbList 面包屑数据格式">
      <Table
        :columns="usageTypeColumns"
        :table-data="usageTypeTableData"
      ></Table>
    </FormItem>
  </Form>
</template>

<script setup lang="ts">
import { BreadcrumbList } from "$/breadcrumb/types";
import { Breadcrumb, Form, FormItem, Table } from "$/index";
import { Column } from "$/table/types";

const list: Array<BreadcrumbList> = [
  {
    name: "首页",
    route: "/guide",
  },
  {
    name: "活动",
  },
  {
    name: "训练营",
  },
];

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
    parameter: "list",
    note: "面包屑数据",
    type: "Array<BreadcrumbList>",
    optional: "-",
    default: "[]",
  },
  {
    parameter: "separator",
    note: "分隔符",
    type: "string",
    optional: "-",
    default: "/",
  },
];
const usageTypeColumns: Array<Column> = [
  {
    prop: "name",
    label: "名称",
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
];
const usageTypeTableData = [
  {
    name: "name",
    note: "面包屑名称",
    type: "string",
    optional: "-",
  },
  {
    name: "route",
    note: "跳转链接(Vue Router跳转)",
    type: "string",
    optional: "-",
  },
];
</script>

<style scoped></style>
