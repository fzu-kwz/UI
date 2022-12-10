<template>
  <KForm align-top>
    <h3 style="margin-top: 0;">Card 卡片</h3>
    <p class="usage">
      header插槽: 卡片头部 <br />
      默认插槽: 卡片内容<br />
      shadow: 阴影显示（string，always | hover | never，默认always）
    </p>
    <FormItem label-text="基础用法">
      <Card>
        <template #header>
          <span>标题</span>
        </template>
        <div v-for="item in 4" :key="item" class="card-item">
          {{ "卡片内容 " + item }}
        </div>
      </Card>
    </FormItem>
    <FormItem label-text="没有头部">
      <Card>
        <div v-for="item in 4" :key="item" class="card-item">
          {{ "卡片内容 " + item }}
        </div>
      </Card>
    </FormItem>
    <FormItem label-text="卡片阴影">
      <div style="display: flex; flex-wrap: wrap;">
        <Card class="card" v-for="item in cards" :key="item" :shadow="item">
          <div>{{ item }}</div>
        </Card>
      </div>
    </FormItem>
  </KForm>
</template>

<script setup lang="ts">
import { Card, KForm, FormItem } from "$/index";

const cards = ["always", "hover", "never"];
</script>

<style scoped>
.card {
  margin-right: 10px;
  margin-bottom: 10px;
}
.card-item {
  margin-bottom: 10px;
}
</style>
