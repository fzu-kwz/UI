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
import { useRouter } from "vue-router";

const backTopNode = ref();
onMounted(() => {
  backTopNode.value = document.getElementsByTagName("main")[0];
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

const open = ref(false);
</script>

<style lang="less" scoped>
.k-container {
  height: 100vh;
}
.fold {
  display: none;
  position: fixed;
  width: 100%;
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
