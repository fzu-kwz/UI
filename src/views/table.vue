<template>
  <KForm align-top>
    <h3 style="margin-top: 0;">Table 表格(Under development)</h3>
    <FormItem label-text="基础用法">
      <KTable :columns="columns" :table-data="tableData"></KTable>
    </FormItem>
    <FormItem label-text="纵向边框">
      <KTable :columns="columns" :table-data="tableData" border></KTable>
    </FormItem>
    <FormItem label-text="斑马条纹">
      <KTable :columns="columns" :table-data="tableData" stripe></KTable>
    </FormItem>
    <FormItem label-text="多选">
      <KTable
        :columns="selectColumns"
        :table-data="tableData"
        @select-change="selectChange"
      ></KTable>
    </FormItem>
    <FormItem label-text="自定义列模板/固定列/固定表头">
      <KTable
        border
        :columns="slotColumns"
        :table-data="slotTableData"
        fix-header
        style="height: 200px;"
      >
        <template #action="{row, index}">
          <KButton @click="action(row, index)">try</KButton>
        </template>
      </KTable>
    </FormItem>
    <FormItem label-text="表头单元格样式/序号">
      <KTable
        :columns="sortColumns"
        :table-data="tableData"
        :header-cell-style="{ color: '#f56c6c', backgroundColor: '#303033' }"
      >
        <template #sort="{index}">{{ index + 1 }}</template>
      </KTable>
    </FormItem>
    <FormItem label-text="无数据">
      <KTable :columns="columns"></KTable>
    </FormItem>
    <FormItem label-text="Attributes">
      <KTable
        :columns="usageAttrColumns"
        :table-data="usageAttrTableData"
      ></KTable>
    </FormItem>
    <FormItem label-text="Events">
      <KTable
        :columns="usageEventColumns"
        :table-data="usageEventTableData"
      ></KTable>
    </FormItem>
    <FormItem label-text="Slot">
      <KTable
        :columns="usageSlotColumns"
        :table-data="usageSlotTableData"
      ></KTable>
    </FormItem>
    <FormItem label-text="Column 表格列数据格式">
      <KTable
        :columns="usageTypeColumns"
        :table-data="usageTypeTableData"
      ></KTable>
    </FormItem>
  </KForm>
</template>

<script setup lang="ts">
import { KTable, KForm, FormItem, KButton, Tip } from "$/index";
import { Column } from "$/table/types";

const columns: Array<Column> = [
  {
    prop: "name",
    label: "name",
    width: "80",
  },
  {
    prop: "birth",
    label: "birth",
    width: "80",
  },
  {
    prop: "address",
    label: "address",
    width: "150",
  },
];

const selectColumns: Array<Column> = [
  {
    prop: "select",
    width: "40",
  },
  {
    prop: "name",
    label: "name",
    width: "80",
  },
  {
    prop: "birth",
    label: "birth",
    width: "80",
  },
  {
    prop: "address",
    label: "address",
    width: "150",
  },
];

const sortColumns: Array<Column> = [
  {
    prop: "sort",
    label: "sort",
    width: "60",
  }, //@ts-ignore
].concat(columns);

const slotColumns: Array<Column> = [
  {
    prop: "name",
    label: "name",
    width: "80",
  },
  {
    prop: "birth",
    label: "birth",
    width: "80",
  },
  {
    prop: "address",
    label: "address",
    width: "150",
  },
  {
    prop: "hobbies",
    label: "hobbies",
    width: "150",
  },
  {
    prop: "action",
    label: "action",
    width: "80",
    fixed: "right",
  },
];
let tableData: any = [];
let slotTableData: any = [];
for (let i = 0; i < 5; i++) {
  tableData.push({
    name: "K",
    birth: "2000.02",
    address: "Fujian, China",
  });
  slotTableData.push({
    name: "K-" + (i + 1),
    birth: "2000.0" + (i + 1),
    address: "Fujian, China",
    hobbies: "Typing code😂",
    operation: "",
  });
}

const action = (row: any, index: number) => {
  Tip({
    message: `第 ${index + 1} 行被点击<br/>
    ${row.name}<br/>
    ${row.birth}<br/>
    ${row.address}<br/>
    ${row.hobbies}`,
    duration: 2000,
  });
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
    parameter: "columns",
    note: "表格列",
    type: "Array<Column>",
    optional: "-",
    default: "[]",
  },
  {
    parameter: "tableData",
    note: "表格数据",
    type: "Array",
    optional: "-",
    default: "[]",
  },
  {
    parameter: "border",
    note: "是否显示纵向边框",
    type: "boolean",
    optional: "-",
    default: "false",
  },
  {
    parameter: "stripe",
    note: "是否显示条纹",
    type: "boolean",
    optional: "-",
    default: "false",
  },
  {
    parameter: "fixHeader",
    note: "是否固定表头(表头下边会出现阴影)",
    type: "boolean",
    optional: "-",
    default: "false",
  },
  {
    parameter: "emptyText",
    note: "无数据时显示的文本",
    type: "string",
    optional: "-",
    default: "No Data",
  },
  {
    parameter: "headerCellStyle",
    note: "表头单元格样式",
    type: "object",
    optional: "-",
    default: "{}",
  },
  {
    parameter: "cellStyle",
    note: "单元格样式",
    type: "object",
    optional: "-",
    default: "{}",
  },
];
const usageEventColumns: Array<Column> = [
  {
    prop: "name",
    label: "名称",
  },
  {
    prop: "note",
    label: "备注",
  },
  {
    prop: "callback",
    label: "回调参数",
  },
];
const usageEventTableData = [
  {
    name: "selectChange",
    note: "选项改变时触发",
    callback: "选中的行索引数组(索引从0开始)",
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
    name: "列内容的字段名",
    note: "自定义列模板，默认为列内容的文本",
    data: "row: 当前行的数据，index: 当前行的索引",
  },
];
const usageTypeColumns: Array<Column> = [
  {
    prop: "name",
    label: "名称",
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
];
const usageTypeTableData = [
  {
    name: "prop",
    note: "列内容的字段名(select时显示多选框)",
    type: "string",
    optional: "-",
  },
  {
    name: "label",
    note: "列标题",
    type: "string",
    optional: "-",
  },
  {
    name: "width",
    note: "列宽度(可选参数)",
    type: "string",
    optional: "-",
  },
  {
    name: "align",
    note: "列文本的对齐方式(可选参数)",
    type: "string",
    optional: "left / right / center",
  },
  {
    name: "fixed",
    note: "列固定方式(可选参数，列对应边上会出现阴影)",
    type: "string",
    optional: "left / right",
  },
];

const selectChange = (selectIndex: Array<number>) => {
  Tip({
    message: `[${selectIndex}]`,
    duration: 1000,
  });
};
</script>

<style scoped></style>
