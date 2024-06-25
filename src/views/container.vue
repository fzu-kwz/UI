<template>
  <Form align-top>
    <h3 style="margin-top: 0;">Container 布局容器</h3>
    <p class="usage">
      Container默认水平排列，当包含Header或者Footer时，垂直排列
    </p>
    <FormItem label-text="页眉+主体">
      <Container>
        <Header>Header</Header>
        <Main>Main</Main>
      </Container>
    </FormItem>
    <FormItem label-text="页眉+主体+页脚">
      <Container>
        <Header>Header</Header>
        <Main>Main</Main>
        <Footer>Footer</Footer>
      </Container>
    </FormItem>
    <FormItem label-text="侧边栏+主体">
      <Container>
        <Aside>Aside</Aside>
        <Main>Main</Main>
      </Container>
    </FormItem>
    <FormItem label-text="页眉+(侧边栏+主体)">
      <Container>
        <Header>Header</Header>
        <Container>
          <Aside>Aside</Aside>
          <Main>Main</Main>
        </Container>
      </Container>
    </FormItem>
    <FormItem label-text="页眉+(侧边栏+(主体+页脚))">
      <Container>
        <Header>Header</Header>
        <Container>
          <Aside>Aside</Aside>
          <Container>
            <Main>Main</Main>
            <Footer>Footer</Footer>
          </Container>
        </Container>
      </Container>
    </FormItem>
    <FormItem label-text="侧边栏+(页眉+主体)">
      <Container>
        <Aside>Aside</Aside>
        <Container>
          <Header>Header</Header>
          <Main>Main</Main>
        </Container>
      </Container>
    </FormItem>
    <FormItem label-text="侧边栏+(页眉+主体+页脚)">
      <Container>
        <Aside>Aside</Aside>
        <Container>
          <Header>Header</Header>
          <Main>Main</Main>
          <Footer>Footer</Footer>
        </Container>
      </Container>
    </FormItem>
    <FormItem label-text="Attributes">
      <Table
        :columns="usageAttrColumns"
        :table-data="usageAttrTableData"
      ></Table>
    </FormItem>
  </Form>
</template>

<script setup lang="ts">
import {
  Container,
  Header,
  Footer,
  Aside,
  Main,
  Form,
  FormItem,
  Table,
} from "$/index";
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
    parameter: "height",
    note: "Header/Footer的高度(单位px)",
    type: "number",
    optional: "-",
    default: "48",
  },
  {
    parameter: "width",
    note: "Aside的宽度(单位px)",
    type: "number",
    optional: "-",
    default: "-",
  },
];
</script>

<style lang="less" scoped>
.k-header,
.k-footer {
  background-color: #aaa;
  text-align: center;
  line-height: 48px;
}
.k-main {
  background-color: #eee;
  line-height: 100px;
  text-align: center;
}
.k-aside {
  width: 100px;
  background-color: #ccc;
  line-height: 140px;
  text-align: center;
}
</style>
