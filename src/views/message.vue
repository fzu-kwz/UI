<template>
  <Form align-top>
    <h3 style="margin-top: 0">Message 提示</h3>
    <FormItem label="基础用法">
      <Button
        v-for="item in tips"
        :key="item.position"
        @click="Message(item)"
        style="margin-right: 5px"
      >
        {{ item.position }}
      </Button>
    </FormItem>
    <FormItem label="四种类型">
      <Button
        v-for="item in type_tips"
        :key="item.type"
        @click="Message(item)"
        style="margin-right: 5px"
      >
        {{ item.type }}
      </Button>
    </FormItem>
    <FormItem label="暗色主题">
      <Button
        @click="
          Message({
            message: 'This is dark message!',
            dark: true,
            showClose: true,
          })
        "
        style="margin-right: 5px"
        >dark</Button
      >
    </FormItem>
    <FormItem label="TipOption 提示数据格式">
      <Table
        :columns="usageTypeColumns"
        :table-data="usageTypeTableData"
      ></Table>
    </FormItem>
  </Form>
</template>

<script setup lang="ts">
import { Message, Form, FormItem, Button, Table } from "$/index";
import { Column } from "$/table/types";
import { TipOption } from "$/message";

const tips: Array<TipOption> = [
  {
    message: "This is top message!",
    position: "top",
    showClose: true,
  },
  {
    message: "This is bottom message!",
    position: "bottom",
    showClose: true,
  },
  {
    message: "This is left message!",
    position: "left",
    showClose: true,
  },
  {
    message: "This is right message!",
    position: "right",
    showClose: true,
  },
  {
    message: "This is center message!",
    position: "center",
    showClose: true,
  },
];

const type_tips: Array<TipOption> = [
  {
    message: "This is success message!",
    type: "success",
  },
  {
    message: "This is warning message!",
    type: "warning",
  },
  {
    message: "This is info message!",
    type: "info",
  },
  {
    message: "This is error message!",
    type: "error",
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
  {
    prop: "default",
    label: "默认值",
  },
];
const usageTypeTableData = [
  {
    name: "message",
    note: "提示内容（必要）",
    type: "string",
    optional: "-",
    default: "-",
  },
  {
    name: "type",
    note: "提示类型",
    type: "string",
    optional: "success / warning / info / error",
    default: "",
  },
  {
    name: "duration",
    note: "提示显示的时间",
    type: "number",
    optional: "-",
    default: "3000",
  },
  {
    name: "position",
    note: "提示显示的位置",
    type: "string",
    optional: "top / bottom / left / right / center",
    default: "top",
  },
  {
    name: "showClose",
    note: "是否显示关闭按钮",
    type: "boolean",
    optional: "-",
    default: "false",
  },
  {
    name: "dark",
    note: "是否使用暗黑模式",
    type: "boolean",
    optional: "-",
    default: "false",
  },
  {
    name: "plain",
    note: "是否使用朴素模式",
    type: "boolean",
    optional: "-",
    default: "false",
  },
];
</script>

<style scoped></style>
