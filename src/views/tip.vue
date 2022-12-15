<template>
  <KForm align-top>
    <h3 style="margin-top: 0;">Tip 提示</h3>
    <p class="usage">！这是一个函数，需要传入一个配置对象</p>
    <FormItem label-text="基础用法">
      <KButton
        v-for="item in tips"
        :key="item.position"
        @click="Tip(item)"
        style="margin-right: 5px;"
      >
        {{ item.position }}
      </KButton>
    </FormItem>
    <FormItem label-text="两种主题">
      <KButton
        v-for="item in theme_tips"
        :key="item.theme"
        @click="Tip(item)"
        style="margin-right: 5px;"
      >
        {{ item.theme }}
      </KButton>
    </FormItem>
    <FormItem label-text="TipOption 提示数据格式">
      <KTable
        :columns="usageTypeColumns"
        :table-data="usageTypeTableData"
      ></KTable>
    </FormItem>
  </KForm>
</template>

<script setup lang="ts">
import { Tip, KForm, FormItem, KButton, KTable } from "$/index";
import { Column } from "$/table/types";
import { TipOption } from "$/tip";

const tips: Array<TipOption> = [
  {
    message: "This is top tip!",
    position: "top",
  },
  {
    message: "This is bottom tip!",
    position: "bottom",
  },
  {
    message: "This is left tip!",
    position: "left",
  },
  {
    message: "This is right tip!",
    position: "right",
  },
  {
    message: "This is center tip!",
    position: "center",
  },
];

const theme_tips: Array<TipOption> = [
  {
    message: "This is light tip!",
    position: "top",
    theme: "light",
  },
  {
    message: "This is dark tip!",
    position: "top",
    theme: "dark",
  },
];

const usageTypeColumns: Array<Column> = [
  {
    prop: "name",
    label: "名称",
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
const usageTypeTableData = [
  {
    name: "message",
    note: "提示内容",
    type: "string",
    optional: "-",
    default: "-",
  },
  {
    name: "duration",
    note: "提示显示的时间(可选参数，单位ms)",
    type: "number",
    optional: "-",
    default: "3000",
  },
  {
    name: "position",
    note: "提示显示的位置(可选参数)",
    type: "string",
    optional: "top / bottom / left / right / center",
    default: "top",
  },
  {
    name: "theme",
    note: "提示的主题(可选参数)",
    type: "string",
    optional: "dark / light",
    default: "dark",
  },
];
</script>

<style scoped></style>
