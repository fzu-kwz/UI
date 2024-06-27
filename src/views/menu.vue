<template>
  <Form align-top>
    <h3 style="margin-top: 0">Menu 菜单栏</h3>
    <FormItem label="基础用法">
      <Menu>
        <MenuItem>
          <template #label>菜单一</template>
        </MenuItem>
        <MenuItem>
          <template #label>菜单二</template>
        </MenuItem>
        <SubMenu>
          <template #label>菜单三</template>
          <MenuItem>
            <template #label>温柔</template>
          </MenuItem>
          <MenuItem>
            <template #label>倔强</template>
          </MenuItem>
          <MenuItem route="/pagination" label="测试">
            <template #label>分页</template>
          </MenuItem>
        </SubMenu>
      </Menu>
    </FormItem>
    <FormItem label="MenuItem Attributes">
      <Table
        :columns="usageMenuItemAttrColumns"
        :table-data="usageMenuItemAttrTableData"
      ></Table>
    </FormItem>
    <FormItem label="MenuItem Slot">
      <Table
        :columns="usageMenuItemSlotColumns"
        :table-data="usageMenuItemSlotTableData"
      ></Table>
    </FormItem>
    <FormItem label="SubMenu Slot">
      <Table
        :columns="usageSubMenuSlotColumns"
        :table-data="usageSubMenuSlotTableData"
      ></Table>
    </FormItem>
  </Form>
</template>

<script setup lang="ts">
import { Menu, MenuItem, SubMenu, Form, FormItem, Table } from '$/index';
import { Column } from '$/table/types';
import { ref } from 'vue';

const menus = ref([]);

const usageMenuItemAttrColumns: Array<Column> = [
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
const usageMenuItemAttrTableData = [
  {
    parameter: 'route',
    note: '跳转链接(Vue Router跳转)',
    type: 'string',
    optional: '-',
    default: '-',
  },
];
const usageMenuItemSlotColumns: Array<Column> = [
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
const usageMenuItemSlotTableData = [
  {
    name: 'label',
    note: '菜单项标题',
    data: '-',
  },
];
const usageSubMenuSlotColumns: Array<Column> = [
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
const usageSubMenuSlotTableData = [
  {
    name: 'label',
    note: '菜单项标题',
    data: '-',
  },
  {
    name: '-',
    note: '子菜单列表',
    data: '-',
  },
];
</script>

<style scoped></style>
