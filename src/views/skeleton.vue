<template>
  <KForm align-top>
    <h3 style="margin-top: 0;">Skeleton 骨架屏</h3>
    <FormItem label-text="基础用法">
      <Skeleton></Skeleton>
    </FormItem>
    <FormItem label-text="防止抖动">
      <KButton
        type="primary"
        size="small"
        @click="loading = !loading"
        style="margin-bottom: 10px;"
      >
        切换 Loading
      </KButton>
      <Skeleton :loading="loading" :delay="500">
        <img src="../../k-vue3-comp/assets/img/error.png" />
      </Skeleton>
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
import { Skeleton, KForm, FormItem, KButton, KTable } from "$/index";
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
    default: "500",
  },
];
</script>

<style scoped></style>
