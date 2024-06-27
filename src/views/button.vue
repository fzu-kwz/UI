<template>
  <Form align-top>
    <h3 style="margin-top: 0">Button 按钮</h3>
    <FormItem label="基础用法">
      <Button v-for="item in type" :type="item">
        {{ item }}
      </Button>
    </FormItem>
    <FormItem label="圆角按钮">
      <Button v-for="item in type" :type="item" round>
        {{ item }}
      </Button>
    </FormItem>
    <FormItem label="圆形按钮">
      <Button v-for="item in type" :type="item" circle>
        <img
          src="/favicon.ico"
          alt="add"
          width="14"
          height="14"
          style="display: block"
        />
      </Button>
    </FormItem>
    <FormItem label="禁用状态">
      <Button v-for="item in type" :type="item" disabled>
        {{ item }}
      </Button>
    </FormItem>
    <FormItem label="不同大小">
      <Button v-for="item in size" :size="item">
        {{ item }}
      </Button>
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
import { Button, Form, FormItem, Table } from '$/index';
import { Column } from '$/table/types';

const type = ['default', 'primary', 'success', 'info', 'warning', 'danger'];
const size = ['large', 'medium', 'defalut', 'small'];

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
    parameter: 'type',
    note: '按钮类型',
    type: 'stirng',
    optional: 'primary / success / info / warning / danger',
    default: '-',
  },
  {
    parameter: 'size',
    note: '按钮大小',
    type: 'stirng',
    optional: 'large / medium / small',
    default: '-',
  },
  {
    parameter: 'round',
    note: '是否为圆角按钮',
    type: 'boolean',
    optional: '-',
    default: 'false',
  },
  {
    parameter: 'circle',
    note: '是否为圆形按钮',
    type: 'boolean',
    optional: '-',
    default: 'false',
  },
  {
    parameter: 'disabled',
    note: '是否禁用',
    type: 'boolean',
    optional: '-',
    default: 'false',
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
    name: 'click',
    note: '点击时触发',
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
    note: '按钮名称',
    data: '-',
  },
];
</script>

<style scoped>
.burger-button {
  margin-top: 5px;
  margin-right: 5px;
}
</style>
