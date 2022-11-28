<template>
  <KForm>
    <p style="font-size: 14px; margin-top: 0;">
      scrollNode: 滚动元素，src: 图片路径，width: 图片宽度，height: 图片高度
    </p>
    <FormItem label-text="基础用法" align-top>
      <LazyLoadImg src="/favicon.ico"></LazyLoadImg>
    </FormItem>
    <FormItem label-text="基础用法" align-top>
      <LazyLoadImg src="/favicon.ico"></LazyLoadImg>
    </FormItem>
    <FormItem label-text="基础用法" align-top>
      <LazyLoadImg src="/favicon.ico"></LazyLoadImg>
    </FormItem>
    <FormItem label-text="基础用法" align-top>
      <LazyLoadImg src="/favicon.ico"></LazyLoadImg>
    </FormItem>
    <FormItem label-text="基础用法" align-top>
      <LazyLoadImg src="/favicon.ico"></LazyLoadImg>
    </FormItem>
    <FormItem label-text="基础用法" align-top>
      <LazyLoadImg src="/favicon.ico"></LazyLoadImg>
    </FormItem>
  </KForm>
</template>

<script setup lang="ts">
import { LazyLoadImg, KForm, FormItem } from "$/index";
</script>

<style scoped></style>
