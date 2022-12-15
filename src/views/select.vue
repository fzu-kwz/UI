<template>
  <KForm align-top>
    <h3 style="margin-top: 0;">Select 选择器</h3>
    <FormItem label-text="基础用法">
      <KSelect v-model="select" :options="options"></KSelect>
    </FormItem>
    <FormItem label-text="禁用状态">
      <KSelect v-model="select" :options="options" disabled></KSelect>
    </FormItem>
    <FormItem label-text="显示清空">
      <KSelect v-model="select" :options="options" allow-clear></KSelect>
    </FormItem>
    <FormItem label-text="不同大小">
      <KSelect
        v-model="select"
        v-for="item in size"
        :size="item"
        :options="options"
        style="margin-bottom: 5px;"
      >
      </KSelect>
    </FormItem>
    <FormItem label-text="Attributes">
      <KTable
        :columns="usageAttrColumns"
        :table-data="usageAttrTableData"
      ></KTable>
    </FormItem>
    <FormItem label-text="SelectOption 选择器选项数据格式">
      <KTable
        :columns="usageTypeColumns"
        :table-data="usageTypeTableData"
      ></KTable>
    </FormItem>
  </KForm>
</template>

<script setup lang="ts">
import { KSelect, KForm, FormItem, KTable } from "$/index";
import { SelectOption } from "$/select/types";
import { Column } from "$/table/types";
import { ref } from "vue";

const size = ["large", "medium", "", "small"];
const select = ref();
const options: Array<SelectOption> = [
  {
    value: "奢香夫人",
    label: "奢香夫人",
  },
  {
    value: "月亮之上",
    label: "月亮之上",
  },
  {
    value: "自由飞翔",
    label: "自由飞翔",
  },
  {
    value: "全是爱",
    label: "全是爱",
  },
  {
    value: "最新民族风",
    label: "最新民族风",
  },
  {
    value: "郎的诱惑",
    label: "郎的诱惑",
  },
  {
    value: "我从草原来",
    label: "我从草原来",
  },
  {
    value: "荷塘月色",
    label: "荷塘月色",
  },
  {
    value: "等爱的玫瑰",
    label: "等爱的玫瑰",
  },
  {
    value: "我们的歌谣",
    label: "我们的歌谣",
  },
  {
    value: "策马奔腾",
    label: "策马奔腾",
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
    parameter: "v-model",
    note: "绑定值(需要绑定)",
    type: "string",
    optional: "-",
    default: "-",
  },
  {
    parameter: "size",
    note: "选择器大小",
    type: "string",
    optional: "large / medium / small",
    default: "-",
  },
  {
    parameter: "options",
    note: "选择器选项",
    type: "Array<SelectOption>",
    optional: "-",
    default: "[]",
  },
  {
    parameter: "allowClear",
    note: "是否显示清空图标",
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
    name: "value",
    note: "选项的值",
    type: "string",
    optional: "-",
  },
  {
    name: "label",
    note: "选项的标签(可选参数)",
    type: "string",
    optional: "-",
  },
];
</script>

<style scoped></style>
