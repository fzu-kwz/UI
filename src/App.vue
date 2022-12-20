<template>
  <Container class="k-container">
    <Aside class="aside-fold">
      <Menu>
        <MenuItem v-for="item in menu" :route="item.route">
          <template #title>{{ item.title }}</template>
        </MenuItem>
      </Menu>
    </Aside>
    <Main>
      <Skeleton :loading="loading" :rows="10">
        <FoldPanelItem class="fold" :active="active" @click="active = true">
          <template #title>Menu</template>
          <Menu>
            <MenuItem
              v-for="item in menu"
              :route="item.route"
              @click.stop="active = false"
            >
              <template #title>{{ item.title }}</template>
            </MenuItem>
          </Menu>
        </FoldPanelItem>
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
  FoldPanelItem,
  Skeleton,
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

const active = ref(false);
const loading = ref(true);
setTimeout(() => {
  loading.value = false;
}, 1000);
</script>

<style lang="less" scoped>
.fold {
  display: none;
}
.k-container {
  height: 100vh;
}

@media screen and(max-width: 768px) {
  .fold {
    display: block;
  }
  .aside-fold {
    display: none;
  }
  .k-container {
    flex-direction: column;
  }
}
</style>
