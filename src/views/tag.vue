<template>
  <Form align-top>
    <h3 style="margin-top: 0;">Tag 标签</h3>
    <FormItem label="基础用法">
      <Tag v-for="item in type" :type="item"></Tag>
    </FormItem>
    <FormItem label="显示关闭按钮">
      <Tag
        v-for="item in type"
        :type="item"
        show-close
        @close="close"
        @click="click"
      ></Tag>
    </FormItem>
    <FormItem label="不同大小">
      <Tag v-for="item in size" :size="item"></Tag>
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
import { Tag, Form, FormItem, Table, Message } from "$/index";
import { Column } from "$/table/types";
import { reactive } from "vue";

const type = reactive(["", "primary", "success", "info", "warning", "danger"]);
const size = ["large", "medium", "", "small"];
const click = () => {
  Message({ message: "click" });
};
const close = (index: number) => {
  Message({ message: "close" });
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
    note: "标签类型",
    type: "stirng",
    optional: "primary / success / info / warning / danger",
    default: "-",
  },
  {
    parameter: "size",
    note: "标签大小",
    type: "stirng",
    optional: "large / medium / small",
    default: "-",
  },
  {
    parameter: "showClose",
    note: "是否显示关闭按钮",
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
    name: "click",
    note: "点击标签时触发",
    callback: "-",
  },
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
    note: "标签内容",
    data: "-",
  },
];
</script>

<style scoped>
.burger-tag {
  margin-bottom: 5px;
  margin-right: 5px;
}
</style>
