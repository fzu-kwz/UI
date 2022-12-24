<template>
  <KForm align-top>
    <h3 style="margin-top: 0;">Drawer 抽屉</h3>
    <FormItem label-text="基础用法">
      <KButton
        v-for="item in drawers"
        @click="item.visible = true"
        style="margin-right: 5px;"
      >
        {{ item.positions }}
      </KButton>
      <Drawer
        v-for="item in drawers"
        v-model:visible="item.visible"
        :title="item.positions"
        :position="item.positions"
        :width="item.width"
      >
        <span>This is a Drawer!</span>
      </Drawer>
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
import { Drawer, KForm, FormItem, KTable, KButton } from "$/index";
import { Column } from "$/table/types";
import { reactive, ref } from "vue";

const drawers = reactive([
  {
    positions: "left",
    visible: false,
  },
  {
    positions: "right",
    visible: false,
  },
  {
    positions: "top",
    visible: false,
    width: 200,
  },
  {
    positions: "bottom",
    visible: false,
    width: 200,
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
    parameter: "v-model:visible",
    note: "是否显示抽屉(需要绑定)",
    type: "boolean",
    optional: "-",
    default: "false",
  },
  {
    parameter: "position",
    note: "抽屉位置",
    type: "string",
    optional: "left / right / top / bottom",
    default: "right",
  },
  {
    parameter: "width",
    note: "抽屉宽度(单位px)",
    type: "number",
    optional: "-",
    default: "300",
  },
  {
    parameter: "showClose",
    note: "是否显示关闭按钮",
    type: "boolean",
    optional: "-",
    default: "true",
  },
  {
    parameter: "modalClose",
    note: "是否可以点击遮罩层关闭",
    type: "boolean",
    optional: "-",
    default: "true",
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
    note: "关闭抽屉时触发",
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
    note: "抽屉内容",
    data: "-",
  },
];
</script>

<style scoped></style>
