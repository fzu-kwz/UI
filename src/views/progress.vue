<template>
  <KForm>
    <h3 style="margin-top: 0;">Progress 进度条</h3>
    <p style="font-size: 14px; margin-top: 0;">
      type: 类型 <br />
      value: 进度值 <br />
      total: 进度总值
    </p>
    <FormItem label-text="基础用法" align-top>
      <Progress v-for="item in type" :type="item" :value="30"></Progress>
    </FormItem>
  </KForm>
</template>

<script setup lang="ts">
import { Progress, KForm, FormItem } from "$/index";

const type = ["primary", "success", "info", "warning", "danger"];
</script>

<style scoped></style>
