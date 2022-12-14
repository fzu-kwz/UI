<template>
  <KForm align-top>
    <h3 style="margin-top: 0;">Table 表格(under development)</h3>
    <p class="usage">
      KTable（！需要有TableColumn才会渲染表格）<br />
      columns: 表格列（Array）<br />
      tableData: 表格数据（Array）<br />
      border: 是否显示边框（boolean）<br />
      stripe: 是否显示条纹（boolean）<br />
      fixHeader: 是否固定表头（boolean，表头下边会出现阴影）<br />
      emptyText: 无数据时显示的文本（string，默认No Data）<br />
      headerCellStyle: 表头单元格样式（object，例：{ backgroundColor: '#f0f0f0'
      }）<br />
      cellStyle: 单元格样式（object，例：{ backgroundColor: '#f0f0f0' }）<br />
      具名(列内容的字段名)插槽: 自定义列模板，默认为列内容的文本（row:
      当前行的数据(object)，index: 当前行的索引(number)）<br /><br />
      Column: 表格列数据格式<br />
      prop: 列内容的字段名（string）<br />
      label: 列标题（string）<br />
      width: 列宽度（string）<br />
      align: 列文本的对齐方式（string，left | right | center）<br />
      fixed: 列固定方式（string，left | right，列对应边上会出现阴影）
    </p>
    <FormItem label-text="基础用法">
      <KTable :columns="columns" :table-data="tableData"></KTable>
    </FormItem>
    <FormItem label-text="纵向边框">
      <KTable :columns="columns" :table-data="tableData" border></KTable>
    </FormItem>
    <FormItem label-text="斑马条纹">
      <KTable :columns="columns" :table-data="tableData" stripe></KTable>
    </FormItem>
    <FormItem label-text="自定义列模板/固定列/固定表头">
      <KTable
        :columns="slotColumns"
        :table-data="slotTableData"
        fix-header
        style="height: 200px;"
      >
        <template #name="{row, index}">
          <KButton type="primary" size="small">
            {{ row.name }}
          </KButton>
        </template>
        <template #operation="{row, index}">
          <KButton @click="operation(row, index)">click</KButton>
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
  </KForm>
</template>

<script setup lang="ts">
import { KTable, KForm, FormItem, KButton, Tip } from "$/index";
import { Column } from "$/table/types";

const columns: Array<Column> = [
  {
    prop: "name",
    label: "名字",
    width: "100",
  },
  {
    prop: "birth",
    label: "生日",
    width: "150",
  },
  {
    prop: "address",
    label: "地址",
    width: "200",
  },
];

const sortColumns: Array<Column> = [
  {
    prop: "sort",
    label: "序号",
    width: "60",
  }, //@ts-ignore
].concat(columns);

const slotColumns: Array<Column> = [
  {
    prop: "name",
    label: "名字",
    width: "100",
    fixed: "left",
  },
  {
    prop: "birth",
    label: "生日",
    width: "150",
  },
  {
    prop: "address",
    label: "地址",
    width: "150",
  },
  {
    prop: "operation",
    label: "操作",
    width: "100",
    fixed: "right",
  },
];
let tableData: any = [];
let sortTableData: any = [];
let slotTableData: any = [];
for (let i = 0; i < 4; i++) {
  tableData.push({
    name: "K",
    birth: "2000.02",
    address: "Hanjiang, Putian, Fujian, China",
  });
  slotTableData.push({
    name: "K-" + (i + 1),
    birth: "2000.0" + (i + 1),
    address: "Hanjiang, Putian, Fujian, China",
    operation: "",
  });
}

const operation = (row: any, index: number) => {
  Tip({
    message: `第 ${index + 1} 行被点击<br/>${row.name}<br/>${row.birth}<br/>${
      row.address
    }`,
    position: "center",
  });
};
</script>

<style scoped></style>
