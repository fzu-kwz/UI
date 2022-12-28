<template>
  <KForm align-top>
    <h3 style="margin-top: 0;">Upload 上传</h3>
    <FormItem label-text="基础用法">
      <Upload>
        <KButton type="primary">上传文件</KButton>
      </Upload>
    </FormItem>
    <FormItem label-text="图片上传">
      <Upload
        :multiple="true"
        :max-size="1024 * 1024 * 2"
        :limit="3"
        accept="image/*"
        @upload="upload"
      >
        <img
          class="add-icon"
          src="../../burger-ui/assets/icon/plus-sign.svg"
          alt="plus-sign"
        />
        <template #tip>
          <div class="tip">
            Only accept pictures, file size no more than 2MB and the number of
            files no more than 3
          </div>
        </template>
      </Upload>
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
  </KForm>
</template>

<script setup lang="ts">
import { Upload, KForm, FormItem, KButton, KTable } from "$/index";
import { Column } from "$/table/types";

const upload = (fileList: Array<File>) => {};

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
  {
    parameter: "progress",
    note: "上传进度值",
    type: "number",
    optional: "-",
    default: "0",
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
    name: "upload",
    note: "文件上传成功或者移除成功时触发",
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
    name: "tip",
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
.tip {
  color: #606266;
  font-size: 14px;
}
</style>
