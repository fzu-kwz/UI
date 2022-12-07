<template>
  <KForm align-top>
    <h3 style="margin-top: 0;">Progress 进度条</h3>
    <p class="usage">
      type: 类型（stirng，默认primary）<br />
      value: 进度值（number，默认0）<br />
      total: 进度总值（number，默认100）
    </p>
    <FormItem label-text="基础用法">
      <Progress v-for="item in type" :type="item" :value="30"></Progress>
    </FormItem>
  </KForm>
</template>

<script setup lang="ts">
import { Progress, KForm, FormItem } from "$/index";

const type = ["primary", "success", "info", "warning", "danger"];
</script>

<style scoped></style>
