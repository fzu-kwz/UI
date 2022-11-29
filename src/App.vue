<template>
  <KButton class="fold" @click="open = true" v-show="!open">
    Menu
  </KButton>
  <Container class="k-container">
    <Aside :class="open ? 'aside-open' : 'aside-fold'">
      <Menu>
        <MenuItem
          v-for="item in menu"
          :route="item.route"
          @click="open = false"
        >
          <template #title>{{ item.title }}</template>
        </MenuItem>
      </Menu>
    </Aside>
    <Main v-show="!open">
      <router-view></router-view>
    </Main>
  </Container>
  <BackTop :back-top-node="backTopNode"></BackTop>
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
import { onMounted, ref } from "vue";

const backTopNode = ref();
onMounted(() => {
  backTopNode.value = document.getElementsByTagName("main")[0];
});

const menu = [
  {
    route: "/container",
    title: "Container 布局容器",
  },
  {
    route: "/button",
    title: "Button 按钮",
  },
  {
    route: "/radio",
    title: "Radio 单选框",
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
    route: "/progress",
    title: "Progress 进度条",
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
.k-container {
  height: 100vh;
}
.fold {
  display: none;
  position: fixed;
  left: 30px;
  right: 30px;
  z-index: 9;
}

@media screen and(max-width: 768px) {
  .fold {
    display: block;
  }

  .aside-fold {
    display: none;
  }

  .aside-open {
    display: block;
  }

  .k-container {
    flex-direction: column;
  }
  .k-aside {
    height: 100vh;
    width: 100%;
  }
}
</style>
