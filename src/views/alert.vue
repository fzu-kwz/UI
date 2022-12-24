<template>
  <KForm align-top>
    <h3 style="margin-top: 0;">Alert 警告</h3>
    <FormItem label-text="基础用法">
      <Alert v-for="item in type" :type="item" style="margin-bottom: 10px;">
        {{ item }}
      </Alert>
    </FormItem>
    <FormItem label-text="文本居中">
      <Alert center>
        文本居中
      </Alert>
    </FormItem>
    <FormItem label-text="显示关闭按钮/自定义文本">
      <Alert
        type="danger"
        show-close
        @close="close"
        style="margin-bottom: 10px;"
      >
        显示关闭按钮
      </Alert>
      <Alert type="danger" show-close close-text="done" @close="close">
        自定义文本
      </Alert>
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
    <FormItem label-text="Slot">
      <KTable
        :columns="usageSlotColumns"
        :table-data="usageSlotTableData"
      ></KTable>
    </FormItem>
  </KForm>
</template>

<script setup lang="ts">
import { KForm, FormItem, KTable, Alert, Tip } from "$/index";
import { Column } from "$/table/types";

const type = ["default", "primary", "success", "info", "warning", "danger"];
const close = () => {
  Tip({ message: "close", duration: 1000 });
};

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
    note: "警告类型",
    type: "stirng",
    optional: "primary / success / info / warning / danger",
    default: "-",
  },
  {
    parameter: "text",
    note: "警告内容",
    type: "string",
    optional: "-",
    default: "-",
  },
  {
    parameter: "showClose",
    note: "是否显示关闭按钮",
    type: "boolean",
    optional: "-",
    default: "false",
  },
  {
    parameter: "closeText",
    note: "关闭按钮自定义文本",
    type: "string",
    optional: "-",
    default: "-",
  },
  {
    parameter: "center",
    note: "文本居中",
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
    name: "close",
    note: "点击关闭按钮时触发",
    callback: "-",
  },
];
const usageSlotColumns: Array<Column> = [
  {
    prop: "name",
    label: "名称",
  },
  {
    prop: "note",
    label: "备注",
  },
  {
    prop: "data",
    label: "数据",
  },
];
const usageSlotTableData = [
  {
    name: "-",
    note: "警告内容",
    data: "-",
  },
];
</script>

<style scoped></style>
