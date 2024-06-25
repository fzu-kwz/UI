<template>
  <Form align-top>
    <h3 style="margin-top: 0">Drawer 抽屉</h3>
    <FormItem label-text="基础用法">
      <Button
        v-for="item in drawers"
        @click="item.visible = true"
        style="margin-right: 5px"
      >
        {{ item.positions }}
      </Button>
      <Drawer
        v-for="item in drawers"
        v-model:visible="item.visible"
        :title="item.positions"
        :position="item.positions"
        :size="item.size"
      >
        <span>This is a Drawer!</span>
      </Drawer>
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
    <FormItem label-text="Slot">
      <Table
        :columns="usageSlotColumns"
        :table-data="usageSlotTableData"
      ></Table>
    </FormItem>
  </Form>
</template>

<script setup lang="ts">
import { Drawer, FormItem, Button, Form, Table } from '$/index';
import { Column } from '$/table/types';
import { reactive } from 'vue';

const drawers = reactive([
  {
    positions: 'left',
    visible: false,
  },
  {
    positions: 'right',
    visible: false,
  },
  {
    positions: 'top',
    visible: false,
    size: 200,
  },
  {
    positions: 'bottom',
    visible: false,
    size: 200,
  },
]);

const usageAttrColumns: Array<Column> = [
  {
    prop: 'parameter',
    label: '参数',
  },
  {
    prop: 'note',
    label: '备注',
  },
  {
    prop: 'type',
    label: '类型',
  },
  {
    prop: 'optional',
    label: '可选值',
  },
  {
    prop: 'default',
    label: '默认值',
  },
];
const usageAttrTableData = [
  {
    parameter: 'v-model:visible',
    note: '是否显示抽屉(需要绑定)',
    type: 'boolean',
    optional: '-',
    default: 'false',
  },
  {
    parameter: 'position',
    note: '抽屉位置',
    type: 'string',
    optional: 'left / right / top / bottom',
    default: 'right',
  },
  {
    parameter: 'size',
    note: '抽屉大小',
    type: 'number / string',
    optional: '-',
    default: '300',
  },
  {
    parameter: 'showClose',
    note: '是否显示关闭按钮',
    type: 'boolean',
    optional: '-',
    default: 'true',
  },
  {
    parameter: 'modalClose',
    note: '是否可以点击遮罩层关闭',
    type: 'boolean',
    optional: '-',
    default: 'true',
  },
];
const usageEventColumns: Array<Column> = [
  {
    prop: 'name',
    label: '名称',
  },
  {
    prop: 'note',
    label: '备注',
  },
  {
    prop: 'callback',
    label: '回调参数',
  },
];
const usageEventTableData = [
  {
    name: 'close',
    note: '关闭抽屉时触发',
    callback: '-',
  },
];
const usageSlotColumns: Array<Column> = [
  {
    prop: 'name',
    label: '名称',
  },
  {
    prop: 'note',
    label: '备注',
  },
  {
    prop: 'data',
    label: '数据',
  },
];
const usageSlotTableData = [
  {
    name: '-',
    note: '抽屉内容',
    data: '-',
  },
];
</script>

<style scoped></style>
