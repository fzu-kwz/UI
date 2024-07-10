<template>
  <Form align-top>
    <h3 style="margin-top: 0">Table 表格</h3>
    <FormItem label="基础用法">
      <Table :columns="columns" :table-data="tableData"></Table>
    </FormItem>
    <FormItem label="纵向边框">
      <Table :columns="columns" :table-data="tableData" border></Table>
    </FormItem>
    <FormItem label="斑马条纹">
      <Table :columns="columns" :table-data="tableData" stripe></Table>
    </FormItem>
    <FormItem label="多选">
      <Table
        :columns="selectColumns"
        :table-data="tableData"
        :default-selected-row-keys="defaultSelectedRowKeys"
        @selectChange="selectChange"
      ></Table>
    </FormItem>
    <FormItem label="自定义列模板/固定列/固定表头">
      <Table
        border
        :columns="slotColumns"
        :table-data="slotTableData"
        fix-header
        style="height: 200px; width: 100%"
        @rowClick="rowClick"
      >
        <template #action="{ row, rowIndex }">
          <Button @click="action(row, rowIndex)">try</Button>
        </template>
      </Table>
    </FormItem>
    <FormItem label="表头单元格样式/序号">
      <Table
        :columns="sortColumns"
        :table-data="tableData"
        :header-cell-style="{ color: '#f56c6c', backgroundColor: '#606060' }"
      >
        <template #sort="{ rowIndex }">{{ rowIndex + 1 }}</template>
      </Table>
    </FormItem>
    <FormItem label="无数据">
      <Table :columns="columns"></Table>
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
    <FormItem label="Column 表格列数据格式">
      <Table
        :columns="usageTypeColumns"
        :table-data="usageTypeTableData"
      ></Table>
    </FormItem>
  </Form>
</template>

<script setup lang="ts">
import { Table, Form, FormItem, Button, Message } from '$/index';
import { Column } from '$/table/types';
import { ref } from 'vue';

const columns: Array<Column> = [
  {
    prop: 'name',
    label: 'name',
    width: '80',
  },
  {
    prop: 'birth',
    label: 'birth',
    width: '80',
  },
  {
    prop: 'address',
    label: 'address',
    width: '150',
  },
];

const defaultSelectedRowKeys = ref(['1000', '1002']);

const selectColumns: Array<Column> = [
  {
    prop: 'select',
    width: '40',
  },
  {
    prop: 'name',
    label: 'name',
    width: '80',
  },
  {
    prop: 'birth',
    label: 'birth',
    width: '80',
  },
  {
    prop: 'address',
    label: 'address',
    width: '150',
  },
];

const sortColumns: Array<Column> = [
  {
    prop: 'sort',
    label: 'sort',
    width: '60',
  }, //@ts-ignore
].concat(columns);

const slotColumns: Array<Column> = [
  {
    prop: 'name',
    label: 'name',
    width: '100',
    fixed: 'left',
  },
  {
    prop: 'birth',
    label: 'birth',
    width: '100',
  },
  {
    prop: 'country',
    label: 'country',
    width: '150',
  },
  {
    prop: 'address',
    label: 'address',
    width: '150',
  },
  {
    prop: 'job',
    label: 'job',
    width: '150',
    ellipsis: true,
  },
  {
    prop: 'hobbies',
    label: 'hobbies',
    width: '150',
  },
  {
    prop: 'action',
    label: 'action',
    width: '100',
    fixed: 'right',
  },
];
let tableData: any = [];
let slotTableData: any = [];
for (let i = 0; i < 5; i++) {
  tableData.push({
    id: `100${i}`,
    name: 'Burger',
    birth: '2000.02',
    address: 'Fujian, China',
  });
  slotTableData.push({
    name: 'burger-' + (i + 1),
    birth: '2000.0' + (i + 1),
    address: 'Fujian, China',
    hobbies: 'Typing code😂',
    country: 'China',
    job: 'Front-end engineer',
  });
}

const action = (row: any, index: number) => {
  Message(`第 ${index + 1} 行被点击`);
};

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
    parameter: 'columns',
    note: '表格列',
    type: 'Array<Column>',
    optional: '-',
    default: '[]',
  },
  {
    parameter: 'tableData',
    note: '表格数据',
    type: 'Array',
    optional: '-',
    default: '[]',
  },
  {
    parameter: 'border',
    note: '是否显示纵向边框',
    type: 'boolean',
    optional: '-',
    default: 'false',
  },
  {
    parameter: 'stripe',
    note: '是否显示条纹',
    type: 'boolean',
    optional: '-',
    default: 'false',
  },
  {
    parameter: 'fixHeader',
    note: '是否固定表头(表头下边会出现阴影)',
    type: 'boolean',
    optional: '-',
    default: 'false',
  },
  {
    parameter: 'emptyText',
    note: '无数据时显示的文本',
    type: 'string',
    optional: '-',
    default: 'No Data',
  },
  {
    parameter: 'headerCellStyle',
    note: '表头单元格样式',
    type: 'object',
    optional: '-',
    default: '{}',
  },
  {
    parameter: 'cellStyle',
    note: '单元格样式',
    type: 'object',
    optional: '-',
    default: '{}',
  },
  {
    parameter: 'defaultSelectedRowKeys',
    note: '默认选中的行',
    type: 'Array<string | number>',
    optional: '-',
    default: '{}',
  },
  {
    parameter: 'rowKey',
    note: '行数据唯一标识',
    type: 'string',
    optional: '-',
    default: 'id',
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
    name: 'selectChange',
    note: '选项改变时触发',
    callback: 'function (selectedKeys, selectedRows) => {}',
  },
  {
    name: 'rowClick',
    note: '点击行触发',
    callback: 'function (row, rowIndex) => {}',
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
    name: 'prop属性值',
    note: '自定义列模板，默认为列内容的文本',
    data: 'row: 当前行的数据，rowIndex: 当前行的索引',
  },
];
const usageTypeColumns: Array<Column> = [
  {
    prop: 'name',
    label: '名称',
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
];
const usageTypeTableData = [
  {
    name: 'prop',
    note: '列内容的字段名(select时显示多选框)',
    type: 'string',
    optional: '-',
  },
  {
    name: 'label',
    note: '列标题',
    type: 'string',
    optional: '-',
  },
  {
    name: 'width',
    note: '列宽度(可选参数)',
    type: 'string',
    optional: '-',
  },
  {
    name: 'align',
    note: '列文本的对齐方式(可选参数)',
    type: 'string',
    optional: 'left / right / center',
  },
  {
    name: 'fixed',
    note: '列固定方式(可选参数，列对应边上会出现阴影)',
    type: 'string',
    optional: 'left / right',
  },
  {
    name: 'ellipsis',
    note: '列单元格是否省略(可选参数)',
    type: 'boolean',
    optional: '-',
  },
];

const selectChange = (selectedKeys: [], selectedRows: []) => {
  console.log(selectedKeys, selectedRows);
};

const rowClick = (row: {}, rowIndex: number) => {
  console.log(row, rowIndex);
};
</script>

<style scoped></style>
