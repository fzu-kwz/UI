<template>
  <KForm align-top>
    <h3 style="margin-top: 0;">Pagination 分页</h3>
    <p class="usage">
      需要绑定v-model:current: 当前页码（number，默认1）<br />
      total: 总数（number，默认20）<br />
      showJump: 显示跳转（boolean）<br />
      @currentChange: 页码改变事件（回调参数当前页码）
    </p>
    <FormItem label-text="基础用法">
      <Pagination v-model:current="current"></Pagination>
    </FormItem>
    <FormItem label-text="显示跳转">
      <Pagination v-model:current="current" show-jump></Pagination>
    </FormItem>
  </KForm>
</template>

<script setup lang="ts">
import { Pagination, KForm, FormItem } from "$/index";
import { ref } from "vue";

const current = ref(1);
</script>

<style scoped></style>
