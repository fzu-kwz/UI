<template>
  <KButton class="fold" @click="open = !open">
    {{ open ? "close" : "open" }}
  </KButton>
  <Container class="k-container">
    <Aside :class="open ? 'aside-open' : 'aside-fold'">
      <Menu>
        <MenuItem
          v-for="item in menu"
          :route="item.route"
          @click="open = !open"
        >
          <template #title>{{ item.title }}</template>
        </MenuItem>
      </Menu>
    </Aside>
    <Main>
      <router-view></router-view>
    </Main>
  </Container>
  <BackTop></BackTop>
</template>

<script setup lang="ts">
import {
  Container,
  Aside,
  Main,
  Menu,
  MenuItem,
  BackTop,
  KButton,
} from "$/index";
import { ref } from "vue";

const menu = [
  {
    route: "/layout",
    title: "Layout 布局",
  },
  {
    route: "/button",
    title: "Button 按钮",
  },
  {
    route: "/input",
    title: "Input 输入框",
  },
  {
    route: "/select",
    title: "Select 下拉框",
  },
  {
    route: "/form",
    title: "Form 表单",
  },
  {
    route: "/menu",
    title: "Menu 菜单栏",
  },
  {
    route: "/pagination",
    title: "Pagination 分页",
  },
  {
    route: "/loading",
    title: "Loading 加载中",
  },
  {
    route: "/upload",
    title: "Upload 上传",
  },
  {
    route: "/empty",
    title: "Empty 空状态",
  },
  {
    route: "/lazy-load-img",
    title: "LazyLoadImg 懒加载图片",
  },
  {
    route: "/back-top",
    title: "BackTop 回到顶部",
  },
];

const open = ref(false);
</script>

<style lang="less" scoped>
.k-aside {
  padding-top: 20px;
}

.fold {
  width: 100%;
}

.aside-fold {
  display: none;
}

.aside-open {
  display: block;
}

@media screen and(max-width: 768px) {
  .k-container {
    flex-direction: column;
  }
  .k-aside {
    width: 100%;
    padding-top: 0;
  }
}
</style>
