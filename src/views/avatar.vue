<template>
  <KForm>
    <h3 style="margin-top: 0;">Avatar 头像</h3>
    <p style="font-size: 14px; margin-top: 0;">
      src: 图片地址 <br />
      shape: 类型 <br />
      size: 大小 <br />
      alt: 替换文本
    </p>
    <FormItem label-text="基础用法" align-top>
      <Avatar></Avatar>
    </FormItem>
    <FormItem label-text="加载失败" align-top>
      <Avatar
        src="https://img.baidu.com/it/u=3263383870,1485448309&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200"
      >
      </Avatar>
    </FormItem>
    <FormItem label-text="展示类型" align-top>
      <Avatar
        src="https://img0.baidu.com/it/u=3263383870,1485448309&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200"
      ></Avatar>
      <Avatar>123</Avatar>
    </FormItem>
    <FormItem label-text="不同形状" align-top>
      <Avatar shape="circle"></Avatar>
      <Avatar shape="square"></Avatar>
    </FormItem>
    <FormItem label-text="不同大小" align-top>
      <Avatar v-for="item in size" :size="item"></Avatar>
      <Avatar v-for="item in size" shape="square" :size="item"></Avatar>
    </FormItem>
  </KForm>
</template>

<script setup lang="ts">
import { Avatar, KForm, FormItem } from "$/index";

const size = ["large", "medium", "defalut", "small"];
</script>

<style scoped>
.avatar {
  margin-right: 10px;
}
</style>
