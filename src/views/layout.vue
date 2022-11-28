<template>
  <KForm>
    <h3 style="margin-top: 0;">Layout 布局</h3>
    <p style="font-size: 14px; margin-top: 0;">
      参考ElementUI，Container默认水平排列，当包含Header或者Footer时，垂直排列 <hr />
      Header <br />
      height: 高度<hr />
      Footer <br />
      height: 高度 <hr />
      Aside <br />
      width: 宽度
    </p>
    <FormItem label-text="页眉+主体" align-top>
      <Container>
        <Header>Header</Header>
        <Main>Main</Main>
      </Container>
    </FormItem>
    <FormItem label-text="页眉+主体+页脚" align-top>
      <Container>
        <Header>Header</Header>
        <Main>Main</Main>
        <Footer>Footer</Footer>
      </Container>
    </FormItem>
    <FormItem label-text="侧边栏+主体" align-top>
      <Container>
        <Aside>Aside</Aside>
        <Main>Main</Main>
      </Container>
    </FormItem>
    <FormItem label-text="页眉+(侧边栏+主体)" align-top>
      <Container>
        <Header>Header</Header>
        <Container>
          <Aside>Aside</Aside>
          <Main>Main</Main>
        </Container>
      </Container>
    </FormItem>
    <FormItem label-text="页眉+(侧边栏+(主体+页脚))" align-top>
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
    <FormItem label-text="侧边栏+(页眉+主体)" align-top>
      <Container>
        <Aside>Aside</Aside>
        <Container>
          <Header>Header</Header>
          <Main>Main</Main>
        </Container>
      </Container>
    </FormItem>
    <FormItem label-text="侧边栏+(页眉+主体+页脚)" align-top>
      <Container>
        <Aside>Aside</Aside>
        <Container>
          <Header>Header</Header>
          <Main>Main</Main>
          <Footer>Footer</Footer>
        </Container>
      </Container>
    </FormItem>
  </KForm>
</template>

<script setup lang="ts">
import {
  Container,
  Header,
  Footer,
  Aside,
  Main,
  KForm,
  FormItem,
} from "$/index";
</script>

<style lang="less" scoped>
.k-header,
.k-footer {
  background-color: #aaa;
  text-align: center;
}
.k-main {
  background-color: #eee;
  line-height: 100px;
  text-align: center;
}
.k-aside {
  background-color: #ccc;
  line-height: 140px;
  text-align: center;
}
</style>
