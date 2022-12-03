<template>
  <KForm>
    <h3 style="margin-top: 0;">LazyLoadImg 懒加载图片</h3>
    <p style="font-size: 14px; margin-top: 0;">
      ！注意，target需要已经挂载的元素，因为懒加载图片作为子组件会比父组件先挂载，target作为props需要提前有元素传递到懒加载图片组件
      <br />
      <hr />
      target: 滚动元素（HTMLElement | Window，默认window）<br />
      src: 图片路径（string）<br />
      width: 图片宽度（number，默认200）<br />
      height: 图片高度（number，默认200）
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
