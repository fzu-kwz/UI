<template>
  <KForm style="height: 1000px;">
    <p style="font-size: 14px; margin-top: 0;">
      backTopNode: 滚动元素，height: 显示需要达到的滚动高度，right:
      距离页面右边距， bottom: 距离页面底部距离
    </p>
    <FormItem label-text="基础用法" align-top>
      <BackTop></BackTop>
    </FormItem>
  </KForm>
</template>

<script setup lang="ts">
import { BackTop, KForm, FormItem } from "$/index";
</script>

<style scoped></style>
