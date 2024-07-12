<!--
 * @Description: 
 * @Author: kangweize kangweize@cnpc.com.cn
 * @Date: 2024-06-25 14:35:53
 * @LastEditors: kangweize 2550121932@qq.com
 * @LastEditTime: 2024-06-27 10:41:16
-->
<template>
  <Container class="burger-container">
    <Aside class="aside-fold">
      <Menu>
        <MenuItem v-for="item in menu" :route="item.route">
          <template #label>{{ item.title }}</template>
        </MenuItem>
      </Menu>
    </Aside>
    <Main>
      <Skeleton :loading="loading" :rows="10">
        <Button class="fold" round @click="visible = true">Menu</Button>
        <Drawer
          v-model="visible"
          position="left"
          :show-close="false"
          :size="220"
        >
          <Menu>
            <MenuItem
              v-for="item in menu"
              :route="item.route"
              @click="visible = false"
            >
              <template #label>{{ item.title }}</template>
            </MenuItem>
          </Menu>
        </Drawer>
        <router-view></router-view>
      </Skeleton>
    </Main>
  </Container>
  <BackTop :target="target"></BackTop>
</template>

<script setup lang="ts">
import {
  Container,
  Aside,
  Main,
  Menu,
  MenuItem,
  BackTop,
  Skeleton,
  Button,
  Drawer,
} from "$/index";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const target = ref();
onMounted(() => {
  target.value = document.getElementsByTagName("main")[0];
});

const router = useRouter();
const menu = router
  .getRoutes()
  .filter((item) => {
    return item.meta.title;
  })
  .map((item) => {
    return { route: item.path, title: item.meta.title };
  });

const loading = ref(true);
setTimeout(() => {
  loading.value = false;
}, 1000);

const visible = ref(false);
</script>

<style lang="less" scoped>
.fold {
  display: none;
}
.burger-container {
  height: 100vh;
}

@media screen and(max-width: 768px) {
  .fold {
    display: block;
  }
  .aside-fold {
    display: none;
  }
  .burger-container {
    flex-direction: column;
  }
}
</style>
