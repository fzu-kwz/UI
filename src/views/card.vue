<template>
  <Form align-top>
    <h3 style="margin-top: 0;">Card 卡片</h3>
    <FormItem label="基础用法">
      <Card>
        <template #header>
          <span>标题</span>
        </template>
        <div v-for="item in 4" :key="item" class="card-item">
          {{ "卡片内容 " + item }}
        </div>
      </Card>
    </FormItem>
    <FormItem label="插入图片">
      <Card style="padding: 0; width: 200px;">
        <img
          src="https://img1.baidu.com/it/u=4185218222,1197108102&fm=253&fmt=auto?w=200&h=200"
          alt="card-img"
        />
        <div style="padding: 20px; text-align: center;">
          <Popup>
            <template #refer>
              <Button>Detail</Button>
            </template>
            哈哈哈哈！！！
          </Popup>
        </div>
      </Card>
    </FormItem>
    <FormItem label="卡片阴影">
      <div style="display: flex; flex-wrap: wrap;">
        <Card class="card" v-for="item in cards" :key="item" :shadow="item">
          <div>{{ item }}</div>
        </Card>
      </div>
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
import { Card, Form, FormItem, Table, Button, Popup } from "$/index";
import { Column } from "$/table/types";

const cards = ["always", "hover", "never"];

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
    parameter: "shadow",
    note: "阴影显示方式",
    type: "stirng",
    optional: "always / hover / never",
    default: "always",
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
    name: "-",
    note: " 卡片内容",
    data: "-",
  },
];
</script>

<style scoped>
.card {
  margin-right: 10px;
  font-size: 14px;
}
.card-item {
  margin-bottom: 10px;
  font-size: 14px;
}
</style>
