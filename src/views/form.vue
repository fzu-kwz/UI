<template>
  <Form align-top>
    <h3 style="margin-top: 0">Form 表单</h3>
    <FormItem label="基础用法">
      <Form labelWidth="100" showSuffix>
        <FormItem label="表单项一">
          <Input></Input>
        </FormItem>
        <FormItem label="表单项二">
          <Input></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" style="width: 100%">确定</Button>
        </FormItem>
      </Form>
    </FormItem>
    <FormItem label="Form Attributes">
      <Table
        :columns="usageAttrColumns"
        :table-data="usageAttrTableData"
      ></Table>
    </FormItem>
    <FormItem label="FormItem Attributes">
      <Table
        :columns="usageItemAttrColumns"
        :table-data="usageItemAttrTableData"
      ></Table>
    </FormItem>
    <FormItem label="FormItem Slot">
      <Table
        :columns="usageItemSlotColumns"
        :table-data="usageItemSlotTableData"
      ></Table>
    </FormItem>
  </Form>
</template>

<script setup lang="ts">
import { Form, FormItem, Input, Button, Table } from '$/index';
import { Column } from '$/table/types';

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
    parameter: 'border',
    note: '是否显示边框',
    type: 'boolean',
    optional: '-',
    default: 'false',
  },
  {
    parameter: 'alignTop',
    note: '标签是否置顶',
    type: 'boolean',
    optional: '-',
    default: 'false',
  },
  {
    parameter: 'labelWidth',
    note: '标签宽度(单位px)',
    type: 'number',
    optional: '-',
    default: '60',
  },
];
const usageItemAttrColumns: Array<Column> = [
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
const usageItemAttrTableData = [
  {
    parameter: 'label',
    note: '标签文本',
    type: 'string',
    optional: '-',
    default: '-',
  },
];
const usageItemSlotColumns: Array<Column> = [
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
const usageItemSlotTableData = [
  {
    name: 'label',
    note: '标签内容',
    data: '-',
  },
];
</script>

<style scoped></style>
