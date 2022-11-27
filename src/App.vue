<template>
  <KForm>
    <FormItem label-text="按钮"><KButton></KButton></FormItem>
    <FormItem label-text="分页"><Pagination></Pagination></FormItem>
    <FormItem label-text="加载中"><Loading></Loading></FormItem>
    <FormItem label-text="输入框"><KInput></KInput></FormItem>
    <FormItem label-text="下拉框"><KSelect></KSelect></FormItem>
    <FormItem><BackTop></BackTop></FormItem>
    <FormItem label-text="上传"><Upload></Upload></FormItem>
    <FormItem label-text="空状态"><Empty></Empty></FormItem>
    <FormItem label-text="懒加载图片">
      <LazyLoadImg src="/favicon.ico"></LazyLoadImg>
    </FormItem>
    <FormItem label-text="懒加载图片">
      <LazyLoadImg src="/favicon.ico"></LazyLoadImg>
    </FormItem>
    <FormItem label-text="懒加载图片">
      <LazyLoadImg src="/favicon.ico"></LazyLoadImg>
    </FormItem>
  </KForm>
</template>

<script setup lang="ts">
import {
  KInput,
  KButton,
  KSelect,
  LazyLoadImg,
  BackTop,
  Pagination,
  Upload,
  Empty,
  Loading,
  KForm,
  FormItem,
} from "@/index";
</script>

<style lang="less" scoped></style>
