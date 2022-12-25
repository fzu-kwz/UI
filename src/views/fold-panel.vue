<template>
  <KForm align-top>
    <h3 style="margin-top: 0;">FoldPanel 折叠面板</h3>
    <FormItem label-text="基础用法">
      <FoldPanel title="你瞒我瞒">
        <div>无言的亲亲亲 侵袭我心</div>
        <div>仍宁愿亲口讲你累得很</div>
        <div>如除我以外在你心</div>
        <div>还多出一个人 你瞒住我</div>
        <div>我亦瞒住我太合衬</div>
      </FoldPanel>
      <FoldPanel>
        <template #title>
          <img src="@/assets/icon/alert.svg" alt="alert" />
          飘向北方 (Live)
        </template>
        <div>梦想的旅途</div>
        <div>我背井离乡</div>
        <div>肩上扛的行囊</div>
        <div>装着对未来的梦想</div>
      </FoldPanel>
    </FormItem>
    <FormItem label-text="Attributes">
      <KTable
        :columns="usageAttrColumns"
        :table-data="usageAttrTableData"
      ></KTable>
    </FormItem>
    <FormItem label-text="Slot">
      <KTable
        :columns="usageSlotColumns"
        :table-data="usageSlotTableData"
      ></KTable>
    </FormItem>
  </KForm>
</template>

<script setup lang="ts">
import { FoldPanel, KForm, FormItem, KTable } from "$/index";
import { Column } from "$/table/types";

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
    parameter: "title",
    note: "标题",
    type: "string",
    optional: "-",
    default: "-",
  },
  {
    parameter: "active",
    note: "根据active变化来展开或折叠",
    type: "boolean",
    optional: "-",
    default: "false",
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
    name: "title",
    note: "自定义标题内容(添加图标等)",
    data: "-",
  },
];
</script>

<style scoped></style>
