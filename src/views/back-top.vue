<template>
  <KForm>
    <h3 style="margin-top: 0;">BackTop 回到顶部</h3>
    <p class="usage">
      target: 滚动元素（HTMLElement | Window，默认window）<br />
      height: 显示需要达到的滚动高度（number，默认200）<br />
      right: 距离视口右边距（number，默认40）<br />
      bottom: 距离视口底部距离（number，默认40）
    </p>
  </KForm>
</template>

<script setup lang="ts">
import { BackTop, KForm, FormItem } from "$/index";
</script>

<style scoped></style>
