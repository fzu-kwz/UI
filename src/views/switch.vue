<template>
  <Form align-top>
    <h3 style="margin-top: 0;">Switch 开关</h3>
    <FormItem label="基础用法">
      <Switch v-model="value"></Switch>
    </FormItem>
    <FormItem label="自定义样式">
      <Switch v-model="value" open-color="blue" close-color="red"></Switch>
    </FormItem>
    <FormItem label="文字描述">
      <Switch v-model="value" close-text="关闭" open-text="打开"></Switch>
    </FormItem>
    <FormItem label="禁用状态">
      <Switch
        v-model="value"
        close-text="关闭"
        open-text="打开"
        disabled
      ></Switch>
    </FormItem>
    <FormItem label="Attributes">
      <Table
        :columns="usageAttrColumns"
        :table-data="usageAttrTableData"
      ></Table>
    </FormItem>
  </Form>
</template>

<script setup lang="ts">
import { Switch, Form, FormItem, Table } from "$/index";
import { Column } from "$/table/types";
import { ref } from "vue";

const value = ref(false);

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
    type: "boolean",
    optional: "-",
    default: "false",
  },
  {
    parameter: "disabled",
    note: "是否禁用",
    type: "boolean",
    optional: "-",
    default: "false",
  },
  {
    parameter: "closeText",
    note: "关闭时的文字描述",
    type: "string",
    optional: "-",
    default: "-",
  },
  {
    parameter: "openText",
    note: "打开时的文字描述",
    type: "string",
    optional: "-",
    default: "-",
  },
  {
    parameter: "closeColor",
    note: "关闭时的背景色",
    type: "string",
    optional: "-",
    default: "#ccc",
  },
  {
    parameter: "openColor",
    note: "打开时的背景色",
    type: "string",
    optional: "-",
    default: "#409eff",
  },
];
</script>

<style scoped></style>
