<template>
  <KForm align-top>
    <h3 style="margin-top: 0;">SlideShow 幻灯片(Debugging)</h3>
    <p class="usage">
      ！建议不少于3张图片时候使用，目前切换箭头还有bug，不做使用
    </p>
    <FormItem label-text="基础用法">
      <SlideShow :slides="slides" width="300"></SlideShow>
    </FormItem>
    <FormItem label-text="Attributes">
      <KTable
        :columns="usageAttrColumns"
        :table-data="usageAttrTableData"
      ></KTable>
    </FormItem>
    <FormItem label-text="Slide 幻灯片数据格式">
      <KTable
        :columns="usageTypeColumns"
        :table-data="usageTypeTableData"
      ></KTable>
    </FormItem>
  </KForm>
</template>

<script setup lang="ts">
import { KForm, FormItem, SlideShow, KTable } from "$/index";
import { Slide } from "$/slide-show/types";
import { Column } from "$/table/types";

const slides: Array<Slide> = [
  {
    link:
      "https://img2.baidu.com/it/u=4137537498,3737648297&fm=253&fmt=auto?w=300&h=200",
    src:
      "https://img2.baidu.com/it/u=4137537498,3737648297&fm=253&fmt=auto?w=300&h=200",
  },
  {
    link:
      "https://img2.baidu.com/it/u=971342122,1533426919&fm=253&fmt=auto?w=300&h=200",
    src:
      "https://img2.baidu.com/it/u=971342122,1533426919&fm=253&fmt=auto?w=300&h=200",
  },
  {
    link:
      "https://img1.baidu.com/it/u=3039983131,1650897883&fm=253&fmt=auto?w=300&h=200",
    src:
      "https://img1.baidu.com/it/u=3039983131,1650897883&fm=253&fmt=auto?w=300&h=200",
  },
  {
    link:
      "https://img1.baidu.com/it/u=1300668939,1504410366&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=858",
    src:
      "https://img1.baidu.com/it/u=1300668939,1504410366&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=858",
  },
  {
    link:
      "https://img1.baidu.com/it/u=1605341541,1182642759&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750",
    src:
      "https://img1.baidu.com/it/u=1605341541,1182642759&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750",
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
    note: "图片宽度",
    type: "string",
    optional: "-",
    default: "400",
  },
  {
    parameter: "height",
    note: "图片高度",
    type: "string",
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
