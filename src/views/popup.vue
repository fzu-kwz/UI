<template>
  <KForm align-top>
    <h3 style="margin-top: 0;">Popup 弹窗(Debugging)</h3>
    <FormItem label-text="基础用法">
      <div
        v-for="item in popups"
        :key="item.position"
        style="display: flex; justify-content: center;"
      >
        <Popup :position="item.position" :content="item.position + ' popup'">
          <template #refer>
            <KButton>{{ item.name }}</KButton>
          </template>
        </Popup>
      </div>
    </FormItem>
    <FormItem label-text="两种主题">
      <div style="display: flex; justify-content: center;">
        <Popup position="top" content="Popup">
          <template #refer>
            <KButton>light</KButton>
          </template>
        </Popup>
        <Popup position="bottom" content="Popup" theme="dark">
          <template #refer>
            <KButton>dark</KButton>
          </template>
        </Popup>
      </div>
    </FormItem>
    <FormItem label-text="插槽传入DOM">
      <Popup position="right">
        <template #refer>
          <KButton>插槽</KButton>
        </template>
        <KButton></KButton>
      </Popup>
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
import { Popup, KForm, FormItem, KButton, KTable } from "$/index";
import { Column } from "$/table/types";

const popups = [
  {
    position: "top",
    name: "上边",
  },
  {
    position: "left",
    name: "左边",
  },
  {
    position: "right",
    name: "右边",
  },
  {
    position: "bottom",
    name: "下边",
  },
];

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
    parameter: "position",
    note: "弹窗位置(左右空间不足时显示在相反位置)",
    type: "string",
    optional: "left / right / top / bottom",
    default: "top",
  },
  {
    parameter: "width",
    note: "弹窗宽度",
    type: "string",
    optional: "-",
    default: "200",
  },
  {
    parameter: "content",
    note: "弹窗内容(使用插槽后无效)",
    type: "string",
    optional: "-",
    default: "-",
  },
  {
    parameter: "theme",
    note: "弹窗主题",
    type: "string",
    optional: "dark / light",
    default: "light",
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
    name: "refer",
    note: "触发弹窗显示的元素",
    data: "-",
  },
  {
    name: "-",
    note: "弹窗内容",
    data: "-",
  },
];
</script>

<style scoped></style>
