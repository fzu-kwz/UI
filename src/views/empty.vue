<template>
  <KForm>
    <h3 style="margin-top: 0;">Empty 空状态</h3>
    <p style="font-size: 14px; margin-top: 0;">
      src: 图片地址 <br />
      text: 描述文字
    </p>
    <FormItem label-text="基础用法" align-top>
      <Empty></Empty>
    </FormItem>
    <FormItem label-text="自定义图片" align-top>
      <Empty
        src="https://img0.baidu.com/it/u=3263383870,1485448309&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200"
      ></Empty>
    </FormItem>
  </KForm>
</template>

<script setup lang="ts">
import { Empty, KForm, FormItem } from "$/index";
</script>

<style scoped></style>
