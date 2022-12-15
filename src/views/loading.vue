<template>
  <KForm align-top>
    <h3 style="margin-top: 0;">Loading 加载中</h3>
    <FormItem label-text="基础用法">
      <KButton @click="loading = !loading">切换loading</KButton>
      <div ref="loadingBox" class="loading-box">loading...</div>
      <Loading :loading="loading" :target="loadingBox"></Loading>
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
import { Loading, KForm, FormItem, KTable, KButton } from "$/index";
import { Column } from "$/table/types";
import { ref } from "vue";

const loadingBox = ref();

const loading = ref(true);

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
    note: "加载覆盖的DOM节点(position: relative)",
    type: "string / HTMLElement",
    optional: "-",
    default: "body",
  },
  {
    parameter: "loading",
    note: "是否显示加载",
    type: "boolean",
    optional: "-",
    default: "true",
  },
  {
    parameter: "text",
    note: "加载文字",
    type: "string",
    optional: "-",
    default: "-",
  },
  {
    parameter: "background",
    note: "遮罩背景色",
    type: "string",
    optional: "-",
    default: "rgba(0, 0, 0, 0.8)",
  },
];
</script>

<style scoped>
.loading-box {
  text-align: center;
  position: relative;
  width: 100%;
  line-height: 200px;
  border: 1px solid #ccc;
  margin-top: 10px;
  border-radius: 3px;
}
</style>
