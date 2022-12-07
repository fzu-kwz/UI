<template>
  <KForm align-top>
    <h3 style="margin-top: 0;">Button 按钮</h3>
    <p class="usage">
      参考ElementUI<br />
      type: 类型（stirng）<br />
      size: 大小（stirng）<br />
      round: 圆角（boolean）<br />
      circle: 圆形（boolean）<br />
      disabled: 禁用（boolean）
    </p>
    <FormItem label-text="基础用法">
      <KButton v-for="item in type" :type="item">
        {{ item }}
      </KButton>
    </FormItem>
    <FormItem label-text="圆角按钮">
      <KButton v-for="item in type" :type="item" round>
        {{ item }}
      </KButton>
    </FormItem>
    <FormItem label-text="圆形按钮">
      <KButton v-for="item in type" :type="item" circle>
        <img src="/favicon.ico" alt="add" width="14" height="14" />
      </KButton>
    </FormItem>
    <FormItem label-text="禁用状态">
      <KButton v-for="item in type" :type="item" disabled>
        {{ item }}
      </KButton>
    </FormItem>
    <FormItem label-text="不同大小">
      <KButton v-for="item in size" :size="item">
        {{ item }}
      </KButton>
    </FormItem>
  </KForm>
</template>

<script setup lang="ts">
import { KButton, KForm, FormItem } from "$/index";

const type = ["default", "primary", "success", "info", "warning", "danger"];
const size = ["large", "medium", "defalut", "small"];
</script>

<style scoped>
.k-button {
  margin-top: 5px;
  margin-right: 5px;
}
</style>
