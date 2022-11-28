<template>
  <KForm>
    <h3 style="margin-top: 0;">BackTop 回到顶部</h3>
    <p style="font-size: 14px; margin-top: 0;">
      backTopNode: 滚动元素 <br />
      height: 显示需要达到的滚动高度 <br />
      right: 距离页面右边距 <br />
      bottom: 距离页面底部距离
    </p>
    <FormItem label-text="基础用法" align-top>
      滚动至窗口右下角出现返回顶部按钮
    </FormItem>
  </KForm>
</template>

<script setup lang="ts">
import { KForm, FormItem } from "$/index";
</script>

<style scoped></style>
