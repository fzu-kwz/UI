<template>
  <Form align-top>
    <h3 style="margin-top: 0;">Upload 上传</h3>
    <FormItem label="基础用法">
      <Upload>
        <Button type="primary">上传文件</Button>
      </Upload>
    </FormItem>
    <FormItem label="图片上传">
      <Upload
        :multiple="true"
        :max-size="1024 * 1024 * 2"
        :limit="3"
        accept="image/*"
      >
        <img
          class="add-icon"
          src="../../burger-ui/assets/icon/plus-sign.svg"
          alt="plus-sign"
        />
        <template #message>
          <div class="message">
            Only accept pictures, file size no more than 2MB and the number of
            files no more than 3
          </div>
        </template>
      </Upload>
    </FormItem>
    <FormItem label="Attributes">
      <Table
        :columns="usageAttrColumns"
        :table-data="usageAttrTableData"
      ></Table>
    </FormItem>
    <FormItem label="Events">
      <Table
        :columns="usageEventColumns"
        :table-data="usageEventTableData"
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
import { Upload, Form, FormItem, Button, Table } from "$/index";
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
    parameter: "v-model:fileList",
    note: "上传文件列表",
    type: "Array",
    optional: "-",
    default: "true",
  },
  {
    parameter: "accept",
    note: "上传文件的类型",
    type: "string",
    optional: "-",
    default: "true",
  },
  {
    parameter: "showList",
    note: "是否显示上传列表",
    type: "boolean",
    optional: "-",
    default: "true",
  },
  {
    parameter: "multiple",
    note: "是否上传多个文件",
    type: "boolean",
    optional: "-",
    default: "false",
  },
  {
    parameter: "limit",
    note: "文件数量限制",
    type: "number",
    optional: "-",
    default: "1",
  },
  {
    parameter: "maxSize",
    note: "文件大小限制(单位字节B)",
    type: "number",
    optional: "-",
    default: "-",
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
    name: "getFiles",
    note: "文件移除成功时触发",
    callback: "文件列表",
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
    name: "message",
    note: "提示文本",
    data: "-",
  },
  {
    name: "-",
    note: "触发文件选择框显示的元素",
    data: "-",
  },
];
</script>

<style lang="less" scoped>
.add-icon {
  border: 1px dashed #d9d9d9;
  border-radius: 3px;
  padding: 70px;
  cursor: pointer;

  &:hover {
    border-color: #409eff;
  }
}
.message {
  color: #606266;
  font-size: 14px;
}
</style>
