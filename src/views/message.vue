<template>
  <Form align-top>
    <h3 style="margin-top: 0">Message 提示</h3>
    <FormItem label="基础用法">
      <Button
        v-for="item in tips"
        :key="item.position"
        @click="Message(item)"
        style="margin-right: 5px"
      >
        {{ item.position }}
      </Button>
    </FormItem>
    <FormItem label="两种主题">
      <Button
        v-for="item in theme_tips"
        :key="item.theme"
        @click="Message(item)"
        style="margin-right: 5px"
      >
        {{ item.theme }}
      </Button>
    </FormItem>
    <FormItem label="TipOption 提示数据格式">
      <Table
        :columns="usageTypeColumns"
        :table-data="usageTypeTableData"
      ></Table>
    </FormItem>
  </Form>
</template>

<script setup lang="ts">
import { Message, Form, FormItem, Button, Table } from '$/index';
import { Column } from '$/table/types';
import { TipOption } from '$/message';

const tips: Array<TipOption> = [
  {
    message: 'This is top message!',
    position: 'top',
    showClose: true,
  },
  {
    message: 'This is bottom message!',
    position: 'bottom',
    showClose: true,
  },
  {
    message: 'This is left message!',
    position: 'left',
    showClose: true,
  },
  {
    message: 'This is right message!',
    position: 'right',
    showClose: true,
  },
  {
    message: 'This is center message!',
    position: 'center',
    showClose: true,
  },
];

const theme_tips: Array<TipOption> = [
  {
    message: 'This is light message!',
    position: 'top',
    theme: 'light',
    showClose: true,
  },
  {
    message: 'This is dark message!',
    position: 'top',
    theme: 'dark',
    showClose: true,
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
  {
    prop: 'default',
    label: '默认值',
  },
];
const usageTypeTableData = [
  {
    name: 'message',
    note: '提示内容',
    type: 'string',
    optional: '-',
    default: '-',
  },
  {
    name: 'duration',
    note: '提示显示的时间(可选参数，单位ms)',
    type: 'number',
    optional: '-',
    default: '3000',
  },
  {
    name: 'position',
    note: '提示显示的位置(可选参数)',
    type: 'string',
    optional: 'top / bottom / left / right / center',
    default: 'top',
  },
  {
    name: 'theme',
    note: '提示的主题(可选参数)',
    type: 'string',
    optional: 'dark / light',
    default: 'dark',
  },
  {
    name: 'showClose',
    note: '是否显示关闭按钮(可选参数)',
    type: 'boolean',
    optional: '-',
    default: 'false',
  },
];
</script>

<style scoped></style>
