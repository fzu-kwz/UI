<template>
  <Form align-top>
    <h3 style="margin-top: 0;">Image 图片</h3>
    <FormItem label="基础用法">
      <Image src="/favicon.ico" style="display: block; margin: 0 auto;"></Image>
    </FormItem>
    <FormItem label="懒加载">
      <Image
        lazy
        :target="target"
        loading-src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F0dbd39dd274025f21e0a4016cfcb32653b24536a364f-9jIt3B_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1673413433&t=fc9e94334a41a49fe3a863139bedfb74"
        :src="item"
        object-fit="cover"
        v-for="item in images"
        :key="item"
        style="display: block; margin: 0 auto;"
      ></Image>
    </FormItem>
    <FormItem label="Attributes">
      <Table
        :columns="usageAttrColumns"
        :table-data="usageAttrTableData"
      ></Table>
    </FormItem>
  </Form>
</template>

<script setup lang="ts">
import { Image, Form, FormItem, Table } from "$/index";
import { Column } from "$/table/types";

const target = document.getElementsByTagName("main")[0];
const images = [
  "https://img0.baidu.com/it/u=2742915274,1590021909&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=400",
  "https://img0.baidu.com/it/u=4207774593,3934974539&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333",
  "https://img0.baidu.com/it/u=2384497557,471697957&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=400",
  "https://img0.baidu.com/it/u=2877239092,1429113755&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=400",
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
    parameter: "lazy",
    note: "是否懒加载",
    type: "boolean",
    optional: "-",
    default: "false",
  },
  {
    parameter: "target",
    note: "监听懒加载滚动事件的容器(需要已经挂载的元素)",
    type: "HTMLElement / Window",
    optional: "-",
    default: "window",
  },
  {
    parameter: "loadingSrc",
    note: "加载提示图像的访问地址",
    type: "string",
    optional: "-",
    default: "-",
  },
  {
    parameter: "src",
    note: "图像的访问地址",
    type: "string",
    optional: "-",
    default: "-",
  },
  {
    parameter: "width",
    note: "图片宽度(单位px)",
    type: "number",
    optional: "-",
    default: "200",
  },
  {
    parameter: "height",
    note: "图片高度(单位px)",
    type: "number",
    optional: "-",
    default: "200",
  },
  {
    parameter: "objectFit",
    note: "图片如何适应容器框",
    type: "number",
    optional: "fill / contain / cover / none / scale-down",
    default: "-",
  },
];
</script>

<style scoped></style>
