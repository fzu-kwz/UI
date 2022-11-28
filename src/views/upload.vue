<template>
  <KForm>
    <p style="font-size: 14px; margin-top: 0;">
      button: 按钮类型，accept: 文件类型限制，showList: 显示上传列表，multiple:
      多文件上传，limit: 文件数量限制，maxSize:
      文件大小限制，@upload文件上传成功事件
    </p>
    <FormItem label-text="基础用法" align-top>
      <Upload :multiple="true" :limit="3"></Upload>
    </FormItem>
    <FormItem label-text="按钮类型" align-top>
      <Upload button :multiple="true" :limit="3"></Upload>
    </FormItem>
  </KForm>
</template>

<script setup lang="ts">
import { Upload, KForm, FormItem } from "$/index";
</script>

<style scoped></style>
