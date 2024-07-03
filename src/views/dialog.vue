<template>
  <Form align-top>
    <h3 style="margin-top: 0">Dialog 对话框</h3>
    <FormItem label="基础用法">
      <Button @click="visible1 = true">打开Dialog</Button>
      <Dialog
        v-model="visible1"
        title="标题"
        @open="handleCallBack('open')"
        @opened="handleCallBack('opened')"
        @close="handleCallBack('close')"
        @closed="handleCallBack('closed')"
        @cancel="handleCallBack('cancel')"
        @ok="handleCallBack('ok')"
      >
        <span>基础用法</span>
      </Dialog>
    </FormItem>
    <FormItem label="顶部距离">
      <Button @click="visible3 = true">打开Dialog</Button>
      <Dialog v-model="visible3" title="标题" :top="200">
        <span>顶部距离：200px</span>
      </Dialog>
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
import { Dialog, Form, FormItem, Button, Table } from "$/index";
import { Column } from "$/table/types";
import { ref } from "vue";

const visible1 = ref(false);
const visible3 = ref(false);

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
    note: "是否显示对话框(需要绑定)",
    type: "boolean",
    optional: "-",
    default: "false",
  },
  {
    parameter: "width",
    note: "对话框宽度(当设备宽度不超过 768px 时，最大宽度为设备宽度的 100%)",
    type: "number | string",
    optional: "-",
    default: "500",
  },
  {
    parameter: "top",
    note: "对话框与顶部的距离",
    type: "number | string",
    optional: "-",
    default: "80",
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
  {
    parameter: "escClose",
    note: "是否可以按下 ESC 关闭",
    type: "boolean",
    optional: "-",
    default: "true",
  },
  {
    parameter: "openDelay",
    note: "弹出框打开的延时(单位：毫秒)",
    type: "number",
    optional: "-",
    default: "0",
  },
  {
    parameter: "closeDelay",
    note: "弹出框关闭的延时(单位：毫秒)",
    type: "number",
    optional: "-",
    default: "0",
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
    name: "open",
    note: "打开的回调",
    callback: "-",
  },
  {
    name: "opened",
    note: "打开动画结束时的回调",
    callback: "-",
  },
  {
    name: "close",
    note: "关闭的回调",
    callback: "-",
  },
  {
    name: "closed",
    note: "关闭动画结束时的回调",
    callback: "-",
  },
  {
    name: "cancel",
    note: "点击取消按钮时触发",
    callback: "-",
  },
  {
    name: "ok",
    note: "点击确定按钮时触发",
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
    note: "对话框内容",
    data: "-",
  },
  {
    name: "footer",
    note: "对话框底部内容",
    data: "-",
  },
];

const handleCallBack = (name: string) => {
  console.log(name);
};
</script>

<style scoped></style>
