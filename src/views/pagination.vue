<template>
  <KForm align-top>
    <h3 style="margin-top: 0;">Pagination 分页</h3>
    <p class="usage">
      需要绑定v-model:current: 当前页码（number，默认1）<br />
      total: 总数（number，默认20）<br />
      jumper: 是否显示跳转（boolean）<br />
      background: 是否显示背景色（boolean）<br />
      @currentChange: 页码改变触发（回调参数当前页码）<br />
      @prevClick: 点击上一页按钮触发（回调参数当前页码）<br />
      @nextClick: 点击下一页按钮触发（回调参数当前页码）
    </p>
    <FormItem label-text="基础用法">
      <Pagination v-model:current="current" jumper></Pagination>
    </FormItem>
    <FormItem label-text="带背景色">
      <Pagination v-model:current="current" jumper background></Pagination>
    </FormItem>
  </KForm>
</template>

<script setup lang="ts">
import { Pagination, KForm, FormItem } from "$/index";
import { ref } from "vue";

const current = ref(1);
</script>

<style scoped></style>
