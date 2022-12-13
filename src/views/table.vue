<template>
  <KForm align-top>
    <h3 style="margin-top: 0;">Table 表格(under development)</h3>
    <p class="usage">
      KTable（！需要有TableColumn才会渲染表格）<br />
      width: 表格宽度（string，css长度单位）<br />
      height: 表格高度（string，css长度单位）<br />
      tableData: 表格数据（Array）<br />
      border: 是否显示边框（boolean）<br />
      stripe: 是否显示条纹（boolean）<br />
      emptyText: 无数据时显示的文本（string，默认No Data）<br />
      scroll: 滚动配置（width: (string，可选参数)，height:
      (string，可选参数)）<br />
      headerCellStyle: 表头单元格样式（object，例：{ color: '#f0f0f0',
      background: '#303030' }）<br />
      cellStyle: 单元格样式（object，例：{ color: '#303030', background:
      '#f0f0f0' }）<br />
      sort: 序号配置（show: (boolean，默认false)，width:
      (string，可选参数，默认50)，align: (string，可选参数，left | right |
      center)）<br />
      具名插槽: 列内容的字段名，默认为列内容的文本（row:
      当前行的数据(object)，index: 当前行的索引(number)）<br /><br />
      TableColumn<br />
      prop: 对应列内容的字段名（string）<br />
      label: 对用列的标题（string）<br />
      width: 对应列的宽度（string）<br />
      align: 对应列的文本对齐方式（string，left | right | center）
    </p>
    <FormItem label-text="基础用法">
      <KTable :table-data="tableData">
        <TableColumn prop="name" label="名字" width="150"></TableColumn>
        <TableColumn prop="birth" label="生日" width="150"></TableColumn>
        <TableColumn prop="address" label="地址" width="150"></TableColumn>
      </KTable>
    </FormItem>
    <FormItem label-text="纵向边框">
      <KTable :table-data="tableData" border>
        <TableColumn prop="name" label="名字" width="150"></TableColumn>
        <TableColumn prop="birth" label="生日" width="150"></TableColumn>
        <TableColumn prop="address" label="地址" width="150"></TableColumn>
      </KTable>
    </FormItem>
    <FormItem label-text="斑马条纹">
      <KTable :table-data="tableData" stripe>
        <TableColumn prop="name" label="名字" width="150"></TableColumn>
        <TableColumn prop="birth" label="生日" width="150"></TableColumn>
        <TableColumn prop="address" label="地址" width="150"></TableColumn>
      </KTable>
    </FormItem>
    <FormItem label-text="插槽">
      <KTable :table-data="slotTableData">
        <TableColumn prop="name" label="名字" width="150"></TableColumn>
        <TableColumn prop="birth" label="生日" width="150"></TableColumn>
        <TableColumn prop="address" label="地址" width="150"></TableColumn>
        <TableColumn prop="operation" label="操作" width="150"></TableColumn>
        <template #operation="{row, index}">
          <KButton @click="operation(row, index)">{{ row.index }}</KButton>
        </template>
      </KTable>
    </FormItem>
    <FormItem label-text="无数据">
      <KTable>
        <TableColumn prop="name" label="名字" width="150"></TableColumn>
        <TableColumn prop="birth" label="生日" width="150"></TableColumn>
        <TableColumn prop="address" label="地址" width="150"></TableColumn>
      </KTable>
    </FormItem>
    <FormItem label-text="表头单元格样式/单元格样式/序号">
      <KTable
        :table-data="tableData"
        :header-cell-style="{ color: '#f0f0f0', background: '#303030' }"
        :cell-style="{ color: '#303030', background: '#f0f0f0' }"
        :sort="{ show: true, align: 'left' }"
      >
        <TableColumn prop="name" label="名字" width="150"></TableColumn>
        <TableColumn prop="birth" label="生日" width="150"></TableColumn>
        <TableColumn prop="address" label="地址" width="150"></TableColumn>
      </KTable>
    </FormItem>
  </KForm>
</template>

<script setup lang="ts">
import { KTable, TableColumn, KForm, FormItem, KButton } from "$/index";

let tableData: any = [];
let slotTableData: any = [];
for (let i = 0; i < 4; i++) {
  tableData.push({
    name: "K",
    birth: "2000.02",
    address: "Fujian",
  });
  slotTableData.push({
    index: "operation-" + i,
    name: "K",
    birth: "2000.02",
    address: "Fujian",
    operation: "",
  });
}

const operation = (row: any, index: number) => {
  alert(`第 ${index + 1} 行被点击\n${row.index}`);
};
</script>

<style scoped></style>
