<template>
  <Form align-top>
    <h3 style="margin-top: 0;">Input 输入框</h3>
    <FormItem label="基础用法">
      <Input v-model="value" placeholder="请输入" />
    </FormItem>
    <FormItem label="禁用状态">
      <Input v-model="value" disabled />
    </FormItem>
    <FormItem label="显示清空">
      <Input v-model="value" allow-clear />
    </FormItem>
    <FormItem label="显示密码">
      <Input v-model="value" type="password" allow-view />
    </FormItem>
    <FormItem label="不同大小">
      <Input
        v-model="value"
        v-for="item in size"
        :size="item"
        style="margin-bottom: 5px;"
      />
    </FormItem>
    <FormItem label="文本域">
      <Input
        v-model="value"
        type="textarea"
        :rows="5"
        resize
        placeholder="请输入"
      />
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
    <FormItem label="Slot">
      <Table
        :columns="usageSlotColumns"
        :table-data="usageSlotTableData"
      ></Table>
    </FormItem>
  </Form>
</template>

<script setup lang="ts">
import { Input, Form, FormItem, Table } from "$/index";
import { Column } from "$/table/types";
import { ref } from "vue";

const size = ["large", "medium", "", "small"];
const value = ref();

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
    type: "string / number",
    optional: "-",
    default: "-",
  },
  {
    parameter: "type",
    note: "输入框类型",
    type: "string",
    optional: "text等原生属性 / textarea",
    default: "text",
  },
  {
    parameter: "size",
    note: "输入框大小",
    type: "string",
    optional: "large / medium / small",
    default: "-",
  },
  {
    parameter: "allowClear",
    note: "是否显示清空图标",
    type: "boolean",
    optional: "-",
    default: "false",
  },
  {
    parameter: "allowView",
    note: "是否显示切换密码图标(密码框)",
    type: "boolean",
    optional: "-",
    default: "false",
  },
  {
    parameter: "placeholder",
    note: "输入框占位文本",
    type: "string",
    optional: "-",
    default: "-",
  },
  {
    parameter: "autocomplete",
    note: "自动补全",
    type: "string",
    optional: "-",
    default: "-",
  },
  {
    parameter: "autofocus",
    note: "是否自动获取焦点",
    type: "boolean",
    optional: "-",
    default: "false",
  },
  {
    parameter: "max",
    note: "最大值",
    type: "number",
    optional: "-",
    default: "-",
  },
  {
    parameter: "min",
    note: "最小值",
    type: "number",
    optional: "-",
    default: "-",
  },
  {
    parameter: "step",
    note: "数字间隔",
    type: "number",
    optional: "-",
    default: "-",
  },
  {
    parameter: "maxlength",
    note: "最大长度",
    type: "number",
    optional: "-",
    default: "-",
  },
  {
    parameter: "minlength",
    note: "最小长度",
    type: "number",
    optional: "-",
    default: "-",
  },
  {
    parameter: "readonly",
    note: "是否只读",
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
    parameter: "resize",
    note: "文本域是否可缩放",
    type: "boolean",
    optional: "-",
    default: "false",
  },
  {
    parameter: "rows",
    note: "文本域行数",
    type: "number",
    optional: "-",
    default: "-",
  },
  {
    parameter: "cols",
    note: "文本域列数",
    type: "number",
    optional: "-",
    default: "-",
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
    name: "focus",
    note: "获取焦点时触发",
    callback: "-",
  },
  {
    name: "blur",
    note: "失去焦点时触发",
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
    name: "suffix",
    note: "自定义后置图标，默认为切换密码图标和清空图标",
    data: "-",
  },
];
</script>

<style scoped></style>
