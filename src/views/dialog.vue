<template>
  <Form align-top>
    <h3 style="margin-top: 0;">Dialog 对话框</h3>
    <FormItem label="基础用法">
      <Button @click="visible1 = true">打开Dialog</Button>
      <Dialog v-model:visible="visible1">
        <span>基础用法</span>
        <template #footer>
          <Button style="margin-right: 10px;" @click="visible1 = false">
            取消
          </Button>
          <Button type="primary" @click="visible1 = false">确定</Button>
        </template>
      </Dialog>
    </FormItem>
    <FormItem label="显示标题">
      <Button @click="visible2 = true">打开Dialog</Button>
      <Dialog v-model:visible="visible2" title="标题">
        <span>显示标题</span>
        <template #footer>
          <Button style="margin-right: 10px;" @click="visible2 = false">
            取消
          </Button>
          <Button type="primary" @click="visible2 = false">确定</Button>
        </template>
      </Dialog>
    </FormItem>
    <FormItem label="顶部距离">
      <Button @click="visible3 = true">打开Dialog</Button>
      <Dialog v-model:visible="visible3" title="标题" :top="200">
        <span>顶部距离：200px</span>
        <template #footer>
          <Button style="margin-right: 10px;" @click="visible3 = false">
            取消
          </Button>
          <Button type="primary" @click="visible3 = false">确定</Button>
        </template>
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
const visible2 = ref(false);
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
    parameter: "v-model:visible",
    note: "是否显示对话框(需要绑定)",
    type: "boolean",
    optional: "-",
    default: "false",
  },
  {
    parameter: "width",
    note:
      "对话框宽度(单位px，当设备宽度不超过768px时，最大宽度为设备宽度的90%)",
    type: "number",
    optional: "-",
    default: "500",
  },
  {
    parameter: "top",
    note: "对话框与顶部的距离(单位px)",
    type: "number",
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
    note: "关闭对话框时触发",
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
</script>

<style scoped></style>
