<template>
  <KForm>
    <h3 style="margin-top: 0;">Upload 上传</h3>
    <p style="font-size: 14px; margin-top: 0;">
      button: 按钮类型 <br />
      accept: 文件类型限制 <br />
      showList: 显示上传列表 <br />
      multiple: 多文件上传 <br />
      limit: 文件数量限制 <br />
      maxSize: 文件大小限制 <br />
      @upload文件上传成功事件
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
