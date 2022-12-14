<template>
  <KForm align-top>
    <h3 style="margin-top: 0;">ColorPicker 颜色选择器</h3>
    <FormItem label-text="基础用法">
      <ColorPicker></ColorPicker>
    </FormItem>
    <FormItem label-text="禁用状态">
      <ColorPicker disabled></ColorPicker>
    </FormItem>
    <FormItem label-text="不同大小">
      <ColorPicker
        v-for="item in size"
        :size="item"
        style="margin-right: 10px;"
      ></ColorPicker>
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
import { ColorPicker, KForm, FormItem, KTable } from "$/index";
import { Column } from "$/table/types";

const size = ["large", "medium", "", "small"];

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
    note: "绑定值(HEX格式，如#ffffff)",
    type: "string",
    optional: "-",
    default: "-",
  },
  {
    parameter: "size",
    note: "大小",
    type: "string",
    optional: "large / medium / small",
    default: "-",
  },
  {
    parameter: "disabled",
    note: "是否禁用",
    type: "boolean",
    optional: "-",
    default: "false",
  },
];
</script>

<style scoped></style>
