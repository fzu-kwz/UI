<template>
  <KForm align-top>
    <h3 style="margin-top: 0;">Tip 提示</h3>
    <p class="usage">
      ！这是一个函数，需要传入一个配置对象<br /><br />
      message: 内容（string）<br />
      duration: 显示时间（number，默认3000，单位ms）<br />
      position: 显示位置（string，top | bottom | left | right，默认top）
    </p>
    <FormItem label-text="基础用法">
      <KButton
        v-for="item in tips"
        @click="Tip(item)"
        style="margin-right: 10px;"
      >
        {{ item.position }}
      </KButton>
    </FormItem>
  </KForm>
</template>

<script setup lang="ts">
import { Tip, KForm, FormItem, KButton } from "$/index";
const tips = [
  {
    message: "This is a tip!",
    position: "top",
  },
  {
    message: "This is a tip!",
    position: "bottom",
  },
  {
    message: "This is a tip!",
    position: "left",
  },
  {
    message: "This is a tip!",
    position: "right",
  },
];
</script>

<style scoped></style>
