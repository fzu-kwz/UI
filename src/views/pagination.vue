<template>
  <KForm>
    <p style="font-size: 14px; margin-top: 0;">
      total: 总数，showJump: 显示跳转，@currentChange获取当前页面
    </p>
    <FormItem label-text="基础用法" align-top>
      <Pagination></Pagination
    ></FormItem>
    <FormItem label-text="显示跳转" align-top>
      <Pagination show-jump></Pagination>
    </FormItem>
  </KForm>
</template>

<script setup lang="ts">
import { Pagination, KForm, FormItem } from "$/index";
</script>

<style scoped></style>
