<template>
  <Form align-top>
    <h3 style="margin-top: 0;">Skeleton 骨架屏</h3>
    <FormItem label="基础用法">
      <Skeleton></Skeleton>
    </FormItem>
    <FormItem label="防止抖动">
      <Button
        type="primary"
        size="small"
        @click="loading = !loading"
        style="margin-bottom: 10px;"
      >
        切换 Loading
      </Button>
      <Skeleton :loading="loading" :delay="500">
        <img src="../../burger-ui/assets/img/error.png" />
      </Skeleton>
    </FormItem>
    <FormItem label="Attributes">
      <Table
        :columns="usageAttrColumns"
        :table-data="usageAttrTableData"
      ></Table>
    </FormItem>
    <FormItem label="Slot">
      <Table
        :columns="usageSlotColumns"
        :table-data="usageSlotTableData"
      ></Table>
    </FormItem>
  </Form>
</template>

<script setup lang="ts">
import { Skeleton, Form, FormItem, Button, Table } from "$/index";
import { Column } from "$/table/types";
import { ref } from "vue";

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
    parameter: "loading",
    note: "是否显示骨架屏",
    type: "boolean",
    optional: "-",
    default: "true",
  },
  {
    parameter: "rows",
    note: "行数",
    type: "number",
    optional: "-",
    default: "4",
  },
  {
    parameter: "delay",
    note: "延迟DOM渲染的时间(单位ms)",
    type: "number",
    optional: "-",
    default: "0",
  },
];
const usageSlotColumns: Array<Column> = [
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
const usageSlotTableData = [
  {
    name: "-",
    note: "骨架屏消失后显示的内容",
    data: "-",
  },
];
</script>

<style scoped></style>
