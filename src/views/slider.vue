<template>
  <Form align-top>
    <h3 style="margin-top: 0;">Slider 滑块</h3>
    <FormItem label-text="基础用法">
      <Slider v-model="value"></Slider>
    </FormItem>
    <FormItem label-text="禁用状态">
      <Slider v-model="value" disabled></Slider>
    </FormItem>
    <FormItem label-text="单位/显示范围">
      <Slider
        v-model="temperature"
        :min="30"
        :max="43"
        unit="℃"
        show-range
      ></Slider>
      <Slider v-model="percent" unit="%" show-range></Slider>
    </FormItem>
    <FormItem label-text="Attributes">
      <Table
        :columns="usageAttrColumns"
        :table-data="usageAttrTableData"
      ></Table>
    </FormItem>
    <FormItem label-text="Events">
      <Table
        :columns="usageEventColumns"
        :table-data="usageEventTableData"
      ></Table>
    </FormItem>
  </Form>
</template>

<script setup lang="ts">
import { Slider, Form, FormItem, Table } from "$/index";
import { Column } from "$/table/types";
import { ref } from "vue";

const value = ref(0);
const temperature = ref(38);
const percent = ref(10);

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
    default: "0",
  },
  {
    parameter: "min",
    note: "最小值",
    type: "number",
    optional: "-",
    default: "0",
  },
  {
    parameter: "max",
    note: "最大值",
    type: "number",
    optional: "-",
    default: "100",
  },
  {
    parameter: "step",
    note: "间隔",
    type: "number",
    optional: "-",
    default: "1",
  },
  {
    parameter: "disabled",
    note: "是否禁用",
    type: "boolean",
    optional: "-",
    default: "false",
  },
  {
    parameter: "unit",
    note: "单位",
    type: "string",
    optional: "-",
    default: "",
  },
  {
    parameter: "showRange",
    note: "是否显示范围",
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
    name: "change",
    note: "绑定值改变时触发",
    callback: "绑定值",
  },
];
</script>

<style scoped></style>
