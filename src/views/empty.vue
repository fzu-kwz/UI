<template>
  <KForm align-top>
    <h3 style="margin-top: 0;">Empty 空状态</h3>
    <p class="usage">
      src: 图片地址（string）<br />
      text: 描述文字（string，默认No Data）
    </p>
    <FormItem label-text="基础用法">
      <Empty></Empty>
    </FormItem>
    <FormItem label-text="自定义图片">
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
