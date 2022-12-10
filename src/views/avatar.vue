<template>
  <KForm align-top>
    <h3 style="margin-top: 0;">Avatar 头像</h3>
    <p class="usage">
      src: 图片地址（string）<br />
      shape: 类型（string，可选值circle | square，默认circle）<br />
      size: 大小（string）
    </p>
    <FormItem label-text="基础用法">
      <Avatar></Avatar>
    </FormItem>
    <FormItem label-text="加载失败">
      <Avatar
        src="https://img.baidu.com/it/u=3263383870,1485448309&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200"
      >
      </Avatar>
    </FormItem>
    <FormItem label-text="展示类型">
      <Avatar
        src="https://img0.baidu.com/it/u=3263383870,1485448309&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200"
      ></Avatar>
      <Avatar>123</Avatar>
    </FormItem>
    <FormItem label-text="不同形状">
      <Avatar shape="circle"></Avatar>
      <Avatar shape="square"></Avatar>
    </FormItem>
    <FormItem label-text="不同大小">
      <Avatar v-for="item in size" :size="item"></Avatar><br />
      <Avatar v-for="item in size" shape="square" :size="item"></Avatar>
    </FormItem>
  </KForm>
</template>

<script setup lang="ts">
import { Avatar, KForm, FormItem } from "$/index";

const size = ["large", "medium", "", "small"];
</script>

<style scoped>
.k-avatar {
  margin-right: 10px;
}
</style>
