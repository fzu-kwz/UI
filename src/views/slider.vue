<template>
  <KForm align-top>
    <h3 style="margin-top: 0;">Slider 滑块</h3>
    <FormItem label-text="基础用法">
      <Slider v-model="value"></Slider>
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
import { Slider, KForm, FormItem, KTable } from "$/index";
import { Column } from "$/table/types";
import { ref } from "vue";

const value = ref<number>(0);

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
    parameter: "v-model",
    note: "绑定值(需要绑定)",
    type: "string / number",
    optional: "-",
    default: "0",
  },
  {
    parameter: "min",
    note: "最小值",
    type: "number",
    optional: "-",
    default: "0",
  },
  {
    parameter: "max",
    note: "最大值",
    type: "number",
    optional: "-",
    default: "100",
  },
  {
    parameter: "step",
    note: "间隔",
    type: "number",
    optional: "-",
    default: "1",
  },
];
</script>

<style scoped></style>
