<template>
  <Form align-top>
    <h3 style="margin-top: 0">FoldPanel 折叠面板</h3>
    <FormItem label="基础用法">
      <FoldPanel v-model="activeNames">
        <FoldPanelItem title="标题" name="1">
          <div>无言的亲亲亲 侵袭我心</div>
          <div>仍宁愿亲口讲你累得很</div>
          <div>如除我以外在你心</div>
          <div>还多出一个人 你瞒住我</div>
          <div>我亦瞒住我太合衬</div>
        </FoldPanelItem>
        <FoldPanelItem name="2">
          <template #title>
            <img src="@/assets/icon/alert.svg" alt="alert" />
            飘向北方 (Live)
          </template>
          <div>梦想的旅途</div>
          <div>我背井离乡</div>
          <div>肩上扛的行囊</div>
          <div>装着对未来的梦想</div>
        </FoldPanelItem>
      </FoldPanel>
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
import { FoldPanel, FoldPanelItem, Form, FormItem, Table } from "$/index";
import { Column } from "$/table/types";
import { ref } from "vue";

const activeNames = ref(["1", "2"]);

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
