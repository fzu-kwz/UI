<template>
  <KForm>
    <h3 style="margin-top: 0;">LazyLoadImg 懒加载图片</h3>
    <p style="font-size: 14px; margin-top: 0;">
      target: 滚动元素 <br />
      src: 图片路径 <br />
      width: 图片宽度 <br />
      height: 图片高度
    </p>
    <FormItem label-text="基础用法" align-top>
      <LazyLoadImg
        :target="target"
        src="/favicon.ico"
        v-for="item in 5"
        style="display: block;"
      ></LazyLoadImg>
    </FormItem>
  </KForm>
</template>

<script setup lang="ts">
import { LazyLoadImg, KForm, FormItem } from "$/index";

const target = document.getElementsByTagName("main")[0];
</script>

<style scoped></style>
