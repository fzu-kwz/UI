<template>
  <KForm align-top>
    <h3 style="margin-top: 0;">Avatar 头像</h3>
    <FormItem label-text="基础用法">
      <Avatar></Avatar>
    </FormItem>
    <FormItem label-text="加载失败">
      <Avatar
        src="https://img.baidu.com/it/u=3263383870,1485448309&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200"
      >
      </Avatar>
    </FormItem>
    <FormItem label-text="展示类型">
      <Avatar
        src="https://img0.baidu.com/it/u=3263383870,1485448309&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200"
      ></Avatar>
      <Avatar>123</Avatar>
    </FormItem>
    <FormItem label-text="不同形状">
      <Avatar shape="circle"></Avatar>
      <Avatar shape="square"></Avatar>
    </FormItem>
    <FormItem label-text="不同大小">
      <Avatar v-for="item in size" :size="item"></Avatar><br />
      <Avatar v-for="item in size" shape="square" :size="item"></Avatar>
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
import { Avatar, KForm, FormItem, KTable } from "$/index";
import { Column } from "$/table/types";

const size = ["large", "medium", "", "small"];

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
    parameter: "src",
    note: "图像的访问地址",
    type: "string",
    optional: "-",
    default: "-",
  },
  {
    parameter: "shape",
    note: "头像形状",
    type: "string",
    optional: "circle / square",
    default: "circle",
  },
  {
    parameter: "size",
    note: "头像大小",
    type: "string",
    optional: "large / medium / small",
    default: "-",
  },
];
</script>

<style scoped>
.k-avatar {
  margin-right: 10px;
}
</style>
