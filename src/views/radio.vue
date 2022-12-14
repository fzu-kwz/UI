<template>
  <KForm align-top>
    <h3 style="margin-top: 0;">Radio 单选框</h3>
    <FormItem label-text="基础用法">
      <Radio
        v-for="item in radios"
        :key="item"
        v-model="radio"
        :value="item"
        style="margin-right: 10px;"
      >
        {{ item }}
      </Radio>
    </FormItem>
    <FormItem label-text="禁用状态">
      <Radio
        v-for="item in radios"
        :key="item"
        v-model="radio"
        :value="item"
        disabled
        style="margin-right: 10px;"
      >
        {{ item }}
      </Radio>
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
import { Radio, KForm, FormItem, KTable } from "$/index";
import { Column } from "$/table/types";
import { ref } from "vue";

const radio = ref("单选框A");
const radios = ["单选框A", "单选框B"];

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
    type: "string / number / boolean",
    optional: "-",
    default: "-",
  },
  {
    parameter: "value",
    note: "绑定的值",
    type: "string / number / boolean",
    optional: "-",
    default: "-",
  },
  {
    parameter: "disabled",
    note: "是否禁用",
    type: "boolean",
    optional: "-",
    default: "false",
  },
];
</script>

<style scoped></style>
