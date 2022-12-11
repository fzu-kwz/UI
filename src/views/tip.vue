<template>
  <KForm align-top>
    <h3 style="margin-top: 0;">Tip 提示</h3>
    <p class="usage">
      ！这是一个函数，需要传入一个配置对象<br /><br />
      message: 内容（string）<br />
      duration: 显示时间（number，默认3000，单位ms）<br />
      position: 显示位置（string，top | bottom | left | right |
      center，默认top）<br />
      theme: 默认提供的主题（string，dark | light，默认dark）
    </p>
    <FormItem label-text="基础用法">
      <KButton
        v-for="item in tips"
        :key="item.position"
        @click="Tip(item)"
        style="margin-right: 10px;"
      >
        {{ item.position }}
      </KButton>
    </FormItem>
    <FormItem label-text="两种主题">
      <KButton
        v-for="item in theme_tips"
        :key="item.theme"
        @click="Tip(item)"
        style="margin-right: 10px;"
      >
        {{ item.theme }}
      </KButton>
    </FormItem>
  </KForm>
</template>

<script setup lang="ts">
import { Tip, KForm, FormItem, KButton } from "$/index";
const tips = [
  {
    message: "This is top tip!",
    position: "top",
  },
  {
    message: "This is bottom tip!",
    position: "bottom",
  },
  {
    message: "This is left tip!",
    position: "left",
  },
  {
    message: "This is right tip!",
    position: "right",
  },
  {
    message: "This is center tip!",
    position: "center",
  },
];

const theme_tips = [
  {
    message: "This is light tip!",
    position: "top",
    theme: "light",
  },
  {
    message: "This is dark tip!",
    position: "top",
    theme: "dark",
  },
];
</script>

<style scoped></style>
