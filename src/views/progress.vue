<template>
  <KForm align-top>
    <h3 style="margin-top: 0;">Progress 进度条</h3>
    <FormItem label-text="基础用法">
      <Progress
        v-for="item in type"
        :type="item"
        :value="customValue"
      ></Progress>
    </FormItem>
    <FormItem label-text="进度条高度/百分比内显">
      <Progress
        v-for="item in type"
        :type="item"
        :value="customValue"
        :height="20"
        text-inside
        style="margin-bottom: 5px;"
      ></Progress>
    </FormItem>
    <FormItem label-text="自定义颜色">
      <Progress color="blue" :value="customValue"></Progress>
      <Progress :color="customColorMethod" :value="customValue"></Progress>
      <KButton
        @click="decrease"
        style="border-top-right-radius: 0; border-bottom-right-radius: 0;"
        >-</KButton
      >
      <KButton
        @click="increase"
        style="
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          border-left: 0;
        "
        >+</KButton
      >
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
import { Progress, KForm, FormItem, KTable, KButton } from "$/index";
import { Column } from "$/table/types";
import { ref } from "vue";

const type = ["primary", "success", "info", "warning", "danger"];
const customColorMethod = (value: number) => {
  if (value < 30) {
    return "#909399";
  } else if (value < 70) {
    return "#e6a23c";
  } else {
    return "#67c23a";
  }
};
const customValue = ref(10);
const increase = () => {
  customValue.value += 10;
  if (customValue.value > 100) {
    customValue.value = 100;
  }
};
const decrease = () => {
  customValue.value -= 10;
  if (customValue.value < 0) {
    customValue.value = 0;
  }
};

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
    parameter: "type",
    note: "进度条类型",
    type: "string",
    optional: "primary / success / info / warning / danger",
    default: "primary",
  },
  {
    parameter: "value",
    note: "进度值",
    type: "number",
    optional: "-",
    default: "0",
  },
  {
    parameter: "total",
    note: "进度总值",
    type: "number",
    optional: "-",
    default: "100",
  },
  {
    parameter: "color",
    note: "进度条颜色",
    type: "string / function",
    optional: "-",
    default: "-",
  },
  {
    parameter: "height",
    note: "进度条高度(单位px)",
    type: "number",
    optional: "-",
    default: "8",
  },
  {
    parameter: "textInside",
    note: "是否百分比内显",
    type: "boolean",
    optional: "-",
    default: "false",
  },
];
</script>

<style scoped></style>
