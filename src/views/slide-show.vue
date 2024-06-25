<template>
  <Form align-top>
    <h3 style="margin-top: 0;">SlideShow 幻灯片(Debugging)</h3>
    <p class="usage">
      ！建议不少于3张图片时候使用，目前左切换箭头还有bug，不做使用
    </p>
    <FormItem label-text="基础用法">
      <SlideShow
        :slides="slides"
        :width="300"
        style="margin: 0 auto;"
      ></SlideShow>
    </FormItem>
    <FormItem label-text="Attributes">
      <Table
        :columns="usageAttrColumns"
        :table-data="usageAttrTableData"
      ></Table>
    </FormItem>
    <FormItem label-text="Slide 幻灯片数据格式">
      <Table
        :columns="usageTypeColumns"
        :table-data="usageTypeTableData"
      ></Table>
    </FormItem>
  </Form>
</template>

<script setup lang="ts">
import { Form, FormItem, SlideShow, Table } from "$/index";
import { Slide } from "$/slide-show/types";
import { Column } from "$/table/types";

const slides: Array<Slide> = [
  {
    link:
      "https://img0.baidu.com/it/u=2742915274,1590021909&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=400",
    src:
      "https://img0.baidu.com/it/u=2742915274,1590021909&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=400",
  },
  {
    link:
      "https://img0.baidu.com/it/u=4207774593,3934974539&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333",
    src:
      "https://img0.baidu.com/it/u=4207774593,3934974539&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333",
  },
  {
    link:
      "https://img0.baidu.com/it/u=2384497557,471697957&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=400",
    src:
      "https://img0.baidu.com/it/u=2384497557,471697957&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=400",
  },
  {
    link:
      "https://img0.baidu.com/it/u=2877239092,1429113755&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=400",
    src:
      "https://img0.baidu.com/it/u=2877239092,1429113755&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=400",
  },
];

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
    parameter: "width",
    note: "图片宽度(单位px)",
    type: "number",
    optional: "-",
    default: "400",
  },
  {
    parameter: "height",
    note: "图片高度(单位px)",
    type: "number",
    optional: "-",
    default: "200",
  },
  {
    parameter: "slides",
    note: "幻灯片数据",
    type: "Array<Slide>",
    optional: "-",
    default: "[]",
  },
  {
    parameter: "interval",
    note: "自动切换的时间间隔(单位ms)",
    type: "number",
    optional: "-",
    default: "3000",
  },
  {
    parameter: "arrow",
    note: "切换箭头的显示方式",
    type: "string",
    optional: "always / hover",
    default: "always",
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
];
const usageTypeTableData = [
  {
    name: "src",
    note: "图像的访问地址",
    type: "string",
    optional: "-",
  },
  {
    name: "alt",
    note: "图片替代文本(可选参数)",
    type: "number",
    optional: "-",
  },
  {
    name: "link",
    note: "点击图片跳转地址(可选参数)",
    type: "string",
    optional: "-",
  },
];
</script>

<style scoped></style>
