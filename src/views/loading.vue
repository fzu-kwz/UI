<template>
  <Form align-top>
    <h3 style="margin-top: 0;">Loading 加载中</h3>
    <FormItem label="基础用法">
      <Button @click="loading = !loading">切换loading</Button>
      <div ref="loadingBox" class="loading-box">loading...</div>
      <Loading :loading="loading" :target="loadingBox"></Loading>
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
import { Loading, Form, FormItem, Table, Button } from "$/index";
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
  {
    parameter: "delay",
    note: "延迟消失的时间(单位ms)",
    type: "number",
    optional: "-",
    default: "0",
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
