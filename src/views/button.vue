<template>
  <KForm align-top>
    <h3 style="margin-top: 0;">Button 按钮(参考ElementUI)</h3>
    <FormItem label-text="基础用法">
      <KButton v-for="item in type" :type="item">
        {{ item }}
      </KButton>
    </FormItem>
    <FormItem label-text="圆角按钮">
      <KButton v-for="item in type" :type="item" round>
        {{ item }}
      </KButton>
    </FormItem>
    <FormItem label-text="圆形按钮">
      <KButton v-for="item in type" :type="item" circle>
        <img src="/favicon.ico" alt="add" width="14" height="14" />
      </KButton>
    </FormItem>
    <FormItem label-text="禁用状态">
      <KButton v-for="item in type" :type="item" disabled>
        {{ item }}
      </KButton>
    </FormItem>
    <FormItem label-text="不同大小">
      <KButton v-for="item in size" :size="item">
        {{ item }}
      </KButton>
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
import { KButton, KForm, FormItem, KTable } from "$/index";
import { Column } from "$/table/types";

const type = ["default", "primary", "success", "info", "warning", "danger"];
const size = ["large", "medium", "defalut", "small"];

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
    note: "按钮类型",
    type: "stirng",
    optional: "primary / success / info / warning / danger",
    default: "-",
  },
  {
    parameter: "size",
    note: "按钮大小",
    type: "stirng",
    optional: "large / medium / small",
    default: "-",
  },
  {
    parameter: "round",
    note: "是否为圆角按钮",
    type: "boolean",
    optional: "-",
    default: "false",
  },
  {
    parameter: "circle",
    note: "是否为圆形按钮",
    type: "boolean",
    optional: "-",
    default: "false",
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

<style scoped>
.k-button {
  margin-top: 5px;
  margin-right: 5px;
}
</style>
