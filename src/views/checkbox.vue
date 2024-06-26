<template>
  <Form align-top>
    <h3 style="margin-top: 0;">Checkbox 多选框</h3>
    <FormItem label="基础用法">
      <Chechbox v-model="checked">多选框</Chechbox>
    </FormItem>
    <FormItem label="禁用状态">
      <Chechbox v-model="checked" disabled>禁用状态</Chechbox>
    </FormItem>
    <FormItem label="多选框组">
      <Chechbox
        v-for="item in checkboxs"
        :key="item.label"
        v-model="item.checked"
        style="margin-right: 10px;"
      >
        {{ item.label }}
      </Chechbox>
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
  </Form>
</template>

<script setup lang="ts">
import { Chechbox, Form, FormItem, Table } from "$/index";
import { Column } from "$/table/types";
import { reactive, ref } from "vue";

const checked = ref(true);
const checkboxs = reactive([
  {
    label: "多选框A",
    checked: false,
  },
  {
    label: "多选框B",
    checked: false,
  },
  {
    label: "多选框C",
    checked: false,
  },
]);

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
