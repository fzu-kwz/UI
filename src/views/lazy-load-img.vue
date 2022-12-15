<template>
  <KForm align-top>
    <h3 style="margin-top: 0;">LazyLoadImg 懒加载图片</h3>
    <p class="usage">
      ！注意，target需要已经挂载的元素，因为懒加载图片作为子组件会比父组件先挂载，target作为props需要提前有元素传递到懒加载图片组件
    </p>
    <FormItem label-text="基础用法">
      <LazyLoadImg
        :target="target"
        loading-src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F0dbd39dd274025f21e0a4016cfcb32653b24536a364f-9jIt3B_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1673413433&t=fc9e94334a41a49fe3a863139bedfb74"
        src="/favicon.ico"
        v-for="item in 5"
        :key="item"
        style="display: block;"
      ></LazyLoadImg>
    </FormItem>
    <FormItem label-text="Attributes">
      <KTable
        :columns="usageAttrColumns"
        :table-data="usageAttrTableData"
      ></KTable>
    </FormItem>
  </KForm>
</template>

<script setup lang="ts">
import { LazyLoadImg, KForm, FormItem, KTable } from "$/index";
import { Column } from "$/table/types";

const target = document.getElementsByTagName("main")[0];

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
    parameter: "target",
    note: "触发滚动的对象",
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
];
</script>

<style scoped></style>
