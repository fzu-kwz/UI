<template>
  <Form align-top>
    <h3 style="margin-top: 0;">Menu 菜单栏</h3>
    <FormItem label-text="基础用法">
      <Menu>
        <MenuItem>
          <template #title>自由飞翔</template>
        </MenuItem>
        <MenuItem>
          <template #title>月亮之上</template>
        </MenuItem>
        <SubMenu>
          <template #title>五月天</template>
          <MenuItem>
            <template #title>温柔</template>
          </MenuItem>
          <MenuItem>
            <template #title>倔强</template>
          </MenuItem>
          <MenuItem route="/pagination">
            <template #title>分页</template>
          </MenuItem>
        </SubMenu>
      </Menu>
    </FormItem>
    <FormItem label-text="MenuItem Attributes">
      <Table
        :columns="usageMenuItemAttrColumns"
        :table-data="usageMenuItemAttrTableData"
      ></Table>
    </FormItem>
    <FormItem label-text="MenuItem Slot">
      <Table
        :columns="usageMenuItemSlotColumns"
        :table-data="usageMenuItemSlotTableData"
      ></Table>
    </FormItem>
    <FormItem label-text="SubMenu Slot">
      <Table
        :columns="usageSubMenuSlotColumns"
        :table-data="usageSubMenuSlotTableData"
      ></Table>
    </FormItem>
  </Form>
</template>

<script setup lang="ts">
import { Menu, MenuItem, SubMenu, Form, FormItem, Table } from "$/index";
import { Column } from "$/table/types";

const usageMenuItemAttrColumns: Array<Column> = [
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
const usageMenuItemAttrTableData = [
  {
    parameter: "route",
    note: "跳转链接(Vue Router跳转)",
    type: "string",
    optional: "-",
    default: "-",
  },
];
const usageMenuItemSlotColumns: Array<Column> = [
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
const usageMenuItemSlotTableData = [
  {
    name: "title",
    note: "菜单项名称",
    data: "-",
  },
];
const usageSubMenuSlotColumns: Array<Column> = [
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
const usageSubMenuSlotTableData = [
  {
    name: "title",
    note: "菜单项名称",
    data: "-",
  },
  {
    name: "-",
    note: "子菜单列表",
    data: "-",
  },
];
</script>

<style scoped></style>
